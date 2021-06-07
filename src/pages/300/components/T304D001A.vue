<template>
  <div class="table-t304d001a">
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
import position from '@data/position';

export default {
  name: 'app-t304d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't304-1a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'site',
        label: this.$lang.t('Operations center'),
        type: 'text',
        required: true
      },
      {
        name: 'location',
        label: this.$lang.t('Geographic location'),
        type: 'text',
        required: true
      },
      {
        autofocus: true,
        name: 'land',
        label: this.$lang.t('Protected area'),
        type: 'text',
        required: true
      },
      {
        label: this.$lang.t('Position with respect to protected area'),
        name: 'posi_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: position,
        useLocale: true,
        required: true
      },
      {
        autofocus: true,
        name: 'operation_type',
        label: this.$lang.t('Operation type'),
        type: 'text',
        required: true
      },
      {
        name: 'size',
        label: this.$lang.t('Area (km2)'),
        type: 'number',
        required: true
      },
      {
        name: 'attribute',
        label: this.$lang.t('Protected area attributes'),
        type: 'text'
      },
      {
        name: 'status',
        label: this.$lang.t('Characterization protected character'),
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t304d001a {
    height: 100%;
  }
</style>
