<template>
  <div class="table-t413d002a">
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
  name: 'app-t413d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't413-2a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'operation',
        label: this.$lang.t('Operación'),
        type: 'text',
        required: true
      },
      {
        name: 'location',
        label: this.$lang.t('Ubicación'),
        type: 'text',
        required: true
      },
      {
        name: 'actual',
        label: this.$lang.t('Impacto negativo real'),
        type: 'text',
        required: true
      },
      {
        name: 'potential',
        label: this.$lang.t('Impacto negativo potencial'),
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
  .table-t413d002a {
    height: 100%;
  }
</style>
