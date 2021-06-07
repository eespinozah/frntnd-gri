<template>
  <div class="table-305d002b">
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
import conservation from '@data/conservation';

export default {
  name: 'app-t305d002b',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't305-2b'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'market',
        label: this.$lang.t('Market'),
        type: 'text',
        required: true
      },
      {
        autofocus: true,
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-305d002b {
    height: 100%;
  }
</style>
