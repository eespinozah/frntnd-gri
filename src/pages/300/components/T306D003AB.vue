<template>
  <div class="table-306d003ab">
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
import spillMaterial from '@data/spillMaterial';
import matrixAffected from '@data/matrixAffected';

export default {
  name: 'app-t306d003ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't306-3ab'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'date',
        label: this.$lang.t('Date'),
        type: 'date',
        required: true,
        width: '150px'
      },
      {
        name: 'mate_id',
        label: this.$lang.t('Spill material'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: spillMaterial,
        useLocale: true,
        required: true
      },
      {
        name: 'matrix',
        label: this.$lang.t('Matrix affected'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: matrixAffected,
        useLocale: true,
        required: true
      },
      {
        name: 'location',
        label: this.$lang.t('Location'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Volume (m3)'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-306d003ab {
    height: 100%;
  }
</style>
