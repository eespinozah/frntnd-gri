<template>
  <div class="table-t302d001cd">
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
      :updateWithParent="false"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';
import destiny from '@data/destiny';

export default {
  name: 'app-t302d001cd',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't302-1cd'
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
        name: 'enty_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'energy-types',
        object: 'energy_type',
        useLocale: true,
        required: true,
      },
      {
        name: 'dest_id',
        label: this.$lang.t('Destiny'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: destiny,
        useLocale: true,
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
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
  }
}
</script>

<style lang="scss" scoped>
  .table-t302d001cd {
    height: 100%;
  }
</style>
