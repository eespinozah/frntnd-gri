<template>
  <mr-table
    ref="table"
    id="table-topic-standard"
    collection="disclosures"
    :queryString="queryString"
    parentCollection="materiality"
    :parentCollectionId="materialityId"
    :columns="columns"
    idField="disc_id"
    :afterFetch="afterFetch">
  </mr-table>
</template>

<script>
export default {
  name: 'app-topic-standard',

  inject: [ 'getOrganizationId', 'getYear', 'getMaterialityId'],
  computed: {
    queryString() {
      return `orga_id=${this.organizationId}&year=${this.year}`;
    },
    organizationId() {
      return this.getOrganizationId();
    },
    year() {
      return this.getYear();
    },
    materialityId() {
      return this.getMaterialityId();
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        label: this.$lang.t('Topic standard GRI'),
        name: 'stan_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'disc_name',
        collection: 'standards',
        object: 'standard',
        useLocale: true,
        required: true,
        afterFetch(dataCollection) {
          const rows = dataCollection.getRows();

          rows.forEach(r => {
            r.setValue('disc_name', `i${r.getId()}_disc_name`);
          });

          return dataCollection;
        }
      },
      {
        label: this.$lang.t('Content GRI'),
        name: 'disc_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'disc_name',
        collection: 'disclosures',
        object: 'disclosure',
        parentComponent: 'stan_id',
        useLocale: true,
        required: true,
        afterFetch(dataCollection) {
          const rows = dataCollection.getRows();

          rows.forEach(r => {
            r.setValue('disc_name', `i${r.getId()}_disc_name`);
          });

          return dataCollection;
        }
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        const disclosure = r.getValue('disclosure');
        disclosure.disc_name = disclosure.shortname + ': ' + this.$lang.t(`i${r.getValue('@id')}_disc_name`);

        const standard = {
          stan_id: disclosure.disclosure_group.sect_id,
          disc_name: disclosure.disclosure_group.section.shortname + ': ' + this.$lang.t(`i${disclosure.disclosure_group.sect_id}_disc_name`)
        };

        r.setValue('disclosure', disclosure);
        r.setValue('standard',   standard);
        r.setValue('stan_id', standard.stan_id);
        r.setValue('disc_id', r.getValue('@id'));

      });

      if (rows.length === 0) {
        this.$refs.table.$el.parentNode.style.display = 'none';
      } else {
        this.$refs.table.$el.parentNode.style.display = '';
      }

      this.$emit('show', rows.length !== 0);

      return dataCollection;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
