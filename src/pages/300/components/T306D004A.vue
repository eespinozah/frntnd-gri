<template>
  <div class="table-306d004a">
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
import typeTransport from '@data/typeTransport';

export default {
  name: 'app-t306d004a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't306-4a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'date',
        label: this.$lang.t('Date'),
        type: 'date',
        required: true,
        width: '150px'
      },
      {
        name: 'trty_id',
        label: this.$lang.t('Type of transport'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: typeTransport,
        useLocale: true,
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value (t)'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-306d004a {
    height: 100%;
  }
</style>
