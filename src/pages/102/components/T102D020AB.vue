<template>
  <div class="table-t102d20ab">
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
  name: 'app-t102d020ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-20ab'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'position',
        label: this.$lang.t('Cargo nivel ejecutivo'),
        type: 'text',
        required: true
      },
      {
        name: 'topic',
        label: this.$lang.t('Tema relacionado'),
        type: 'text',
        required: true
      },
      {
        name: 'directly',
        label: this.$lang.t('¿Informa directamente al máximo organo?'),
        type: 'checkbox'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d020ab {
    height: 100%;
  }
</style>
