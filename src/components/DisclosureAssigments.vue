<template>
  <div class="table-disclosure-assigments">
    <mr-table
      ref="table"
      :autoLoad="false"
      :columns="columns"
      collection="disclosure-disclosure-assigments"
      editable
      goURL=""
      parentCollection="disclosure-group-submissions"
      :parentCollectionId="parentCollectionId"
      :beforeUpdate="beforeUpdate"
      :afterFetch="afterFetch"
      :updateWithParent="false"
    >
    </mr-Table>
  </div>
</template>

<script>
export default {
  name: 'app-disclosure-assigments',
  props: {
    rowCollectionParent: Object
  },
  computed: {
    parentCollectionId() {
      return this.rowCollectionParent.getId();
    },
    orga_id() {
      return this.rowCollectionParent.getValue('orga_id');
    },
    year() {
      return this.rowCollectionParent.getValue('year');
    },
    table() {
      return this.$refs.table;
    }
  },
  watch: {
    standard(standard) {
      this.refresh(standard);
    }
  },
  created() {
    this.columns = [
      {
        name: 'shortname',
        label: this.$lang.t('Nº contenido'),
        type: 'link',
        readonly: true,
        url: (rowCollection) => {
          return `site/${rowCollection.getValue('digr_id')}?orga_id=${this.orga_id}&year=${this.year}&disclosure=${rowCollection.getValue('shortname')}`;
        },
        width: '150px'
      },
      {
        name: 'disc_name',
        label: this.$lang.t('Contenido'),
        type: 'text',
        readonly: true,
        useLocale: true
      },
      {
        autofocus: true,
        label: this.$lang.t('Usuario asignado'),
        name: 'assigned_to_acco_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'fullname',
        collection: 'organizations/allowed',
        object: 'assigned_to_account',
        afterFetch: this.afterFetchAllowed,
        useLocale: false,
        required: true,
        width: '200px'
      },
      {
        label: this.$lang.t('Terminado'),
        name: 'status',
        type: 'html',
        html(value, rowCollection, next) {

          let color = '#FF0800';
          let icon  = 'close';

          try {
            value = JSON.parse(value);

            if (value === true) {
              color = '#00A86B';
              icon  = 'done';
            }

            if (value === false) {
              color = '#FFD300';
              icon  = 'remove';
            }
          } finally {
            next(`<div style="display:flex;justify-content:center;width:80px;">
            <span style="color:${color}" class="material-icons">${icon}</span>
            </div>`);
          }
        },
        width: '100px'
      },
    ];
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.table.fetchWithQueryString({ orga_id: this.orga_id, year: this.year });
    },
    async beforeUpdate(data, next) {
      return await next({ ...data, orga_id: this.orga_id, year: this.year });
    },
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        r.setValue('disc_name', `i${r.getValue('@id')}_disc_name`);
        r.setValue('ready_quantity', `${r.getValue('ready')}/${r.getValue('quantity')}`);

        const account = r.getValue('assigned_to_account');

        if (account) {
          account.fullname = `${account.name} ${account.lastname}`
        }

      });

      return dataCollection;
    },
    afterFetchAllowed(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        r.setValue('fullname', `${r.getValue('name')} ${r.getValue('lastname')}`);

      });

      return dataCollection;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
