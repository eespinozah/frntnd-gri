<template>
  <div class="table-t102d008b">
    <mr-table
      ref="table"
      :autoLoad="false"
      :columns="columns"
      :collection="collection"
      goURL=""
      :parentCollection="parentCollection"
      :parentCollectionId="organizationId"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';

export default {
  name: 'app-t102d008b',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 'calc/d8b'
    },
    parentCollection: {
      type: String,
      default: 't102001001'
    }
  },
  created() {
    this.columns = [
      {
        alwaysVisible: true,
        name: 'name',
        label: this.$lang.t('Región'),
        type: 'text'
      },
      {
        name: 'permanent',
        label: this.$lang.t('Contrato permanente'),
        type: 'number',
        readonly: true
      },
      {
        name: 'temporary',
        label: this.$lang.t('Contrato temporal'),
        type: 'number',
        readonly: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d008b {
    height: 100%;
  }
</style>
