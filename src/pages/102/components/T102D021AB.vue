<template>
  <div class="table-t102d021ab">
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
  name: 'app-t102d021ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-21ab'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'stakeholder',
        label: this.$lang.t('Grupo de interes'),
        type: 'text',
        required: true
      },
      {
        name: 'topic',
        label: this.$lang.t('Tema'),
        type: 'text',
        required: true
      },
      {
        name: 'process',
        label: this.$lang.t('Proceso de consulta'),
        type: 'text',
        required: true
      },
      {
        name: 'delegation',
        label: this.$lang.t('Delegación y porqué'),
        type: 'text',
        required: false
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d021a {
    height: 100%;
  }
</style>
