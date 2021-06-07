<template>
  <div class="table-t404d002a">
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
  name: 'app-t404d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't404-2a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'program',
        label: this.$lang.t('Programa'),
        type: 'text',
        required: true,
        width: '200px'
      },
      {
        name: 'description',
        label: this.$lang.t('Descripción'),
        type: 'text',
        required: false
      },
      {
        name: 'value',
        label: this.$lang.t('Nº de empleados'),
        type: 'number',
        required: true,
        width: '150px'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t404d002a {
    height: 100%;
  }
</style>
