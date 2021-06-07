<template>
  <div class="table-t302d001ab">
    <mr-table
      ref="table"
      :autoLoad="false"
      :columns="columns"
      :collection="collection"
      goURL=""
      parentCollection="organizations"
      :parentCollectionId="organizationId"
      :deletable="true"
      editable
      :showAddRow="true"
      :beforeUpdate="beforeUpdate"
      :afterFetch="afterFetch"
      :updateWithParent="false"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';
import renewable from '@data/renewable';

export default {
  name: 'app-t302d001ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't302-1ab'
    }
  },
  created() {
   this.columns = [
      {
        autofocus: true,
        name: 'date',
        label: this.$lang.t('Date'),
        type: 'date',
        required: true
      },
      {
        label: this.$lang.t('Fuel type used'),
        name: 'futy_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'fuel-types',
        object: 'fuel_type',
        useLocale: true,
        required: true,
      },
      {
        name: 'renewable',
        label: this.$lang.t('Class'),
        type: 'text',
        readonly: true
      },
      {
        name: 'value',
        label: this.$lang.t('Cantidad'),
        type: 'number',
        required: true
      },
      {
        label: this.$lang.t('Unit'),
        name: 'enun_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'energy-units',
        object: 'energy_unit',
        useLocale: true,
        required: true,
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {
        r.setValue('renewable', this.$lang.t(r.getValue('fuel_type.renewable') ? 'Renewable' : 'Non-renewable'));
      });

      return dataCollection;
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t302d001ab {
    height: 100%;
  }
</style>
