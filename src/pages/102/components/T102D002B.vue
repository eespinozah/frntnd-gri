<template>
  <div class="table-t102d002b">
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

export default {
  name: 'app-t102d002b',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-2b'
    }
  },
  created() {
    this.columns = [
      {
        name: 'product',
        label: this.$lang.t('Product'),
        type: 'text',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      },
      {
        name: 'banned_explanation',
        label: this.$lang.t('Banned explanation'),
        type: 'text',
        required: false
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d002b {
    height: 100%;
  }
</style>
