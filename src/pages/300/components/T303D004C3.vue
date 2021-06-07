<template>
  <div class="table-t303d004c3">
    <mr-table
      ref="table"
      :autoLoad="false"
      :columns="columns"
      :collection="collection"
      parentCollection="t300303001"
      :parentCollectionId="organizationId"
      :beforeUpdate="beforeUpdate"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';

export default {
  name: 'app-t303d004c3',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 'calc/treatments'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'treatment',
        label: this.$lang.t('Treatment'),
        type: 'text'
      },
      {
        autofocus: true,
        name: 'total',
        label: this.$lang.t('Total'),
        type: 'number',
        width: '200px'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t303d004c3 {
    height: 100%;
  }
</style>
