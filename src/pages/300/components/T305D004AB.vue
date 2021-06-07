<template>
  <div class="table-305d004ab">
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
import conservation from '@data/conservation';

export default {
  name: 'app-t305d004ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't305-4ab'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'metric',
        label: this.$lang.t('Metric'),
        type: 'text',
        required: true
      },
      {
        name: 'unit',
        label: this.$lang.t('Unit'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
        type: 'number',
        required: true,
        width: '200px'
      },
      {
        name: 'ratio',
        label: this.$lang.t('Organization ratio'),
        type: 'text',
        readonly: true
      },
      {
        name: 'ratio_unit',
        label: this.$lang.t('Unit ratio'),
        type: 'text',
        readonly: true
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-305d004ab {
    height: 100%;
  }
</style>
