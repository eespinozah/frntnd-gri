<template>
  <div class="table-t201d001ai">
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
  name: 'app-t201d001ai',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't201-1a-i'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Income'),
        type: 'text',
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
  .table-t201d001ai {
    height: 100%;
  }
</style>
