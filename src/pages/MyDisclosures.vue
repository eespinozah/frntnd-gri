<template>
  <mr-page class="page-my-disclosures">
    <app-year
      :year="year"
      @onChange="onChangeYear($event)">
    </app-year>
    <mr-card
      class="card-my-disclosures"
      :label="'My disclosures' | t">
      <mr-table
        ref="table"
        :autoLoad="true"
        :columns="columns"
        collection="disclosure-assigments/of-mine"
        goURL=""
        keyField="false"
        parentCollection="years"
        :parentCollectionId="year">
      </mr-Table>
    </mr-card>
  </mr-page>
</template>

<script>
export default {
  name: 'app-my-disclosures',
  watch: {
    '$route.query.year': {
      immediate: true,
      handler(value) {
        this.year = Number(value);
      }
    }
  },
  data() {
    return {
      year: null
    }
  },
  created() {
    this.columns = [
      {
        label: this.$lang.t('Organization'),
        name: 'organization.name',
        type: 'text'
      },
      {
        label: this.$lang.t('Standard'),
        name: 'disclosure.disclosure_group.section.standard.name',
        type: 'text'
      },
      {
        label: this.$lang.t('Tema material'),
        name: 'disclosure.disclosure_group.section.name',
        type: 'text'
      },
      {
        label: this.$lang.t('Disclosure'),
        name: 'disclosure.shortname',
        type: 'link',
        url: (rowCollection) => {
          const digr_id    = rowCollection.getValue('disclosure.digr_id');
          const orga_id    = rowCollection.getValue('organization.@id');
          const disclosure = rowCollection.getValue('disclosure.shortname');

          return `site/${digr_id}?orga_id=${orga_id}&year=${this.year}&disclosure=${disclosure}`;
        },
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
  methods: {
    onChangeYear(year) {
      if (this.year === year) {
        return;
      }

      this.$router.push({ path: this.$router.currentRoute.path, query: { ...this.$route.query, year: year }})
    }
  }
}
</script>

<style lang="scss" scoped>
.page-my-disclosures {
  box-sizing: border-box;
  height: 100%;
  padding: 20px;

  /deep/ .form {
    position: absolute;
    top: 6px;
    right: 6px;
    z-index: 1;

    form {
      background-color: transparent;
      padding: 0;
    }
  }

  .card-my-disclosures {
    height: 100%;
  }
}
</style>
