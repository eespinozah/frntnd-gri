<template>
  <div class="table-s012d045ab">
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
  name: 'app-t102d045ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-45ab'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'entity',
        label: this.$lang.t('Nombre entidad'),
        type: 'text',
        required: true
      },
      {
        name: 'covered',
        label: this.$lang.t('¿Aparece en informe?'),
        type: 'checkbox'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-s012d045ab {
    height: 100%;
  }
</style>
