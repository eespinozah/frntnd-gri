<template>
  <div class="table-t411d001b">
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
  name: 'app-t411d001b',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't411-1b'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Nombre caso'),
        type: 'text',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Descripción'),
        type: 'text',
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t411d001b {
    height: 100%;
  }
</style>
