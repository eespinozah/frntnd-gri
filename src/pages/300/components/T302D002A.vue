<template>
  <div class="table-t302d002a">
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
import upstream from '@data/upstream';

export default {
  name: 'app-t302d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't302-2a'
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
        name: 'upstream',
        label: this.$lang.t('Class'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: upstream,
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
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: false
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t302d002a {
    height: 100%;
  }
</style>
