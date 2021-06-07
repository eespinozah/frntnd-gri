<template>
  <mr-page class="page-standard">
    <app-head
      class="head"
      :my_sections="my_sections"
      :orga_id="orga_id"
      :year="year"
      :title="title | t"
      :showLink="showLink"
      :digrId="digrId"
      @find="onFind($event)"></app-head>
    <mr-card
      class="card-disclosure"
      :label="titleCard | t">
      <mr-table
        ref="table"
        :autoLoad="false"
        :columns="columns"
        :collection="collection"
        :collectionId="collectionId"
        editable
        goURL=""
        :beforeUpdate="beforeUpdate"
        :afterFetch="afterFetch"
        expanded="app-disclosure-assigments"
      >
      </mr-Table>
    </mr-card>
  </mr-page>
</template>

<script>
export default {
  name: 'app-standard',
  props: {
    collection: String,
    collectionId: String,
    standard: Number,
    title: String,
    titleCard: {
      type: String,
      default: 'Topics'
    },
    titleColumn: {
      type: String,
      default: 'Material topics'
    },
    showLink: Boolean,
    digrId: Number
  },
  computed: {
    table() {
      return this.$refs.table;
    }
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(query) {
        this.orga_id     = 0;
        this.year        = 0;
        this.my_sections = false;

        if (query.hasOwnProperty('orga_id')) {
          this.orga_id = Number(query.orga_id);
        }

        if (query.hasOwnProperty('year')) {
          this.year = Number(query.year);
        }

        if (query.hasOwnProperty('my_sections')) {
          this.my_sections = JSON.parse(query.my_sections);
        }

        if (this.orga_id && this.year) {
          this.$nextTick(() => this.refresh());
        }
      }
    }
  },
  data() {
    return {
      orga_id: 0,
      year: 0,
      my_sections: false
    };
  },
  created() {
    this.columns = [
      {
        name: 'section_name',
        label: this.$lang.t(this.titleColumn),
        type: 'text',
        readonly: true,
        type: 'link',
        useLocale: true,
        url: (rowCollection) => {
          return `site/${rowCollection.getId()}?orga_id=${this.orga_id}&year=${this.year}&my_sections=${this.my_sections}`;
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
        name: 'modification_time',
        label: this.$lang.t('Modification Time'),
        type: 'date',
        readonly: true,
        width: '150px'
      },
      {
        name: 'ready_quantity',
        label: this.$lang.t('Nº indicadores cerrados'),
        type: 'text',
        readonly: true,
        width: '200px'
      }
    ];
  },
  methods: {
    refresh() {
      const query = { my_sections: this.my_sections, orga_id: this.orga_id, year: this.year,'section.stan_id': this.standard };
      this.table.closeAllExpanded();
      this.table.fetchWithQueryString(query);
    },
    onFind(params) {
      this.$router.push({ path: this.$router.currentRoute.path, query: { ...Object.fromEntries(params), time: +new Date() }})
    },
    async beforeUpdate(data, next) {
      return await next({ ...data, orga_id: this.orga_id, year: this.year });
    },
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {
        const section_name = `i${r.getValue('@id')}_section_name`;

        r.setValue('section_name',   `${r.getValue('shortname')}: ${this.$lang.t(section_name)}`);
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
.page {
  box-sizing: border-box;
  height: 100%;
  padding: 20px;

  /deep/ .tabs {
    .head {
      height: 50px;
    }

    .card-disclosure {
      height: calc(100% - 50px);
    }
  }
}
</style>
