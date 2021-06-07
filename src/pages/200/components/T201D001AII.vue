<template>
  <div class="table-t201d001aii">
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
import operating_expenses from '@data/operating_expenses';

export default {
  name: 'app-t201d001aii',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't201-1a-ii'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Operating expenses'),
        type: 'text',
        required: true
      },
      {
        label: this.$lang.t('Type'),
        name: 'type_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        useLocale: true,
        localCollection: true,
        localData: operating_expenses,
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
        type: 'number',
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t201d001aii {
    height: 100%;
  }
</style>
