<template>
  <div class="table-t303d004ab">
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
import fresh from '@data/fresh';
import destinationsWater from '@data/destinationsWaterT303D004AB';

export default {
  name: 'app-t303d004ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't303-4ab'
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
        label: this.$lang.t('Destiny'),
        name: 'dest_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: destinationsWater,
        useLocale: true,
        required: true
      },
      {
        label: this.$lang.t('Water class'),
        name: 'fresh',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: fresh,
        useLocale: true,
        required: true
      },
      {
        label: this.$lang.t('Treatment'),
        name: 'trea_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'treatment-levels',
        object: 'treatment_level',
        useLocale: true,
        required: true,
      },
      {
        name: 'value',
        label: this.$lang.t('Quantity (m3)'),
        type: 'number',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t303d004ab {
    height: 100%;
  }
</style>
