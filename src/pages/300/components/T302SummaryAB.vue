<template>
  <div class="table-t302summaryab">
    <mr-table
      ref="table"
      :autoLoad="false"
      :columns="columns"
      :collection="collection"
      goURL=""
      parentCollection="t300302001"
      :parentCollectionId="organizationId"
      :beforeUpdate="beforeUpdate"
      :afterFetch="afterFetch"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';
import destiny from '@data/destiny';

export default {
  name: 'app-t302summaryab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 'd1/summary-ab'
    }
  },
  inject: [
    'getDestEnunId'
  ],
  computed: {
    dest_enun_id() {
      return this.getDestEnunId();
    }
  },
  created() {
   this.columns = [
      {
        autofocus: true,
        name: 'fuelname',
        label: this.$lang.t('Fuel type'),
        type: 'text',
        width: '200px'
      },
      {
        name: 'class',
        label: this.$lang.t('Class'),
        type: 'text',
        width: '200px'
      },
      {
        name: 'total_with_unit',
        label: this.$lang.t('Total2'),
        type: 'text'
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {
        r.setValue('class', this.$lang.t(r.getValue('renewable') ? 'Renewable' : 'Non-renewable'));
        r.setValue('total_with_unit', `${r.getValue('total')} ${r.getValue('unit_symbol')}`);
      });

      return dataCollection;
    },
    refresh() {
      if (this.dest_enun_id !== null) {
        this.table.fetchWithQueryString({ year: this.year, dest_enun_id: this.dest_enun_id });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t302summaryab {
    height: 100%;
  }
</style>
