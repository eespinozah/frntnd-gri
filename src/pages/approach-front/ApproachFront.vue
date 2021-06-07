<template>
  <mr-page class="approach-front">
    <div class="head">
      <app-head
        :showMySections="false"
        :orga_id="orga_id"
        :year="year"
        :title="'S103_2016' | t"
        @find="onFind"></app-head>
    </div>
    <div class="body">
      <mr-card
        class="card-materiality"
        :label="'Materiality: Study and Status' | t">
        <mr-form
          ref="form"
          :autoLoad="false"
          collection="t103-status"
          :collectionId="orga_id"
          :floatButtons="false"
          parentCollection="years"
          :parentCollectionId="year"
          :rows="rows"
          :usePut="true"
          @save="save"
          @saveenter="onSaveEnter"
        ></mr-form>
      </mr-card>
      <mr-card
        class="card-list-materialities"
        :label="'List of material topics' | t">
        <mr-table
          ref="table"
          :autoLoad="false"
          :columns="columns"
          collection="materiality"
          editable
          :afterFetch="afterFetch"
          :updateWithParent="false"
          :queryString="queryString">
        </mr-Table>
      </mr-card>
      <mr-card-tab :active="0">
        <app-comments ref="comments"></app-comments>
        <app-logs ref="logs"></app-logs>
      </mr-card-tab>
    </div>
  </mr-page>
</template>

<script>
import Files from '@/mixins/Files';
import statusListMaterialities from '@data/statusListMaterialities';

export default {
  name: 'app.approach-front',
  mixins: [Files],
  props: {
    digrId: {
      type: String,
      default: '103-status',
    },
  },
  provide() {
    return {
      getOrganizationId: this.getOrganizationId,
      getYear: this.getYear,
      getDigrId: this.getDigrId,
      getChange: this.getChange
    };
  },
  data() {
    return {
      change: null,
      orga_id: 0,
      year: 0,
    };
  },
  computed: {
    form() {
      return this.$refs.form;
    },
    table() {
      return this.$refs.table;
    },
    queryString() {
      return `orga_id=${this.orga_id}&year=${this.year}`;
    },
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(query) {
        this.orga_id = 0;
        this.year    = 0;

        if (query.hasOwnProperty('orga_id')) {
          this.orga_id = Number(query.orga_id);
        }

        if (query.hasOwnProperty('year')) {
          this.year = Number(query.year);
        }

        if (this.orga_id && this.year) {
          this.change = +new Date();
          this.$nextTick(() => this.refresh());
        }
      }
    }
  },
  created() {
    this.rows = [
      [
        this.getFieldFileStorage('docu_gid'),
        {
          initialValue: this.status,
          label: this.$lang.t('Status List Material Topics'),
          name: 'status',
          type: 'dropdown',
          valueField: '@id',
          textField: 'name',
          localCollection: true,
          localData: statusListMaterialities,
          useLocale: true,
          width: '200px'
        }
      ],
      [
        {
          height: '100px',
          name: 'description',
          label: this.$lang.t('Reason'),
          type: 'textarea'
        }
      ]
    ];

    this.columns = [
      {
        alwaysVisible: true,
        editable: false,
        name: 'material_topic.name',
        label: this.$lang.t('Material topics'),
        type: 'link',
        url: (rowCollection) => {
          const materialTopic = rowCollection.getValue('material_topic');
          return `site/approach?orga_id=${this.orga_id}&year=${this.year}&mato_id=${materialTopic['@id']}`;
        }
      },
      {
        autofocus: true,
        label: this.$lang.t('Assigned'),
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
        editable: false,
        name: 'finished',
        label: this.$lang.t('Finished'),
        width: '100px',
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
      }
    ];
  },
  methods: {
    getChange() {
      return this.change;
    },
     getDigrId() {
      return this.digrId;
    },
    getOrganizationId() {
      return this.orga_id;
    },
    getYear() {
      return this.year;
    },
    refresh() {
      const query = { orga_id: this.orga_id, year: this.year };
      this.table.fetchWithQueryString(query);
      this.form.fetch();

      this.refreshComments();
    },
    onFind(params) {
      this.$router.push({ path: this.$router.currentRoute.path, query: { ...Object.fromEntries(params), time: +new Date() }})

      this.orga_id = params.get('orga_id');
      this.year    = params.get('year');

      this.$forceUpdate();

      this.$nextTick(async () => { });
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
    },
    async onSaveEnter(e) {
      await this.form.save();
    },
    save(collection) {
      this.refreshComments();
    },
    refreshComments() {
      this.$refs.comments.refresh();
      this.$refs.logs.refresh();
    },
  }
}
</script>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  flex: 0 1 auto;
  height: 100%;
  padding: 20px;

  /deep/ .tabs {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:
      50px
      1fr;

    .head {
      box-sizing: border-box;

      .approach-head {
        box-sizing: border-box;

        form {
          margin: 0;
        }
      }
    }

    .body {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding-bottom: 20px;

      .card + .card {
        margin-top: 0;
      }

    }
  }
}
</style>
