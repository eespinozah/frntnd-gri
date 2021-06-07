<template>
  <div class="table-305d007a">
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
import emissions from '@data/emissions';
import unitsT305D007A from '@data/unitsT305D007A';

export default {
  name: 'app-t305d007a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't305-7a'
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
        name: 'emission',
        label: this.$lang.t('Type of emission'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: emissions,
        useLocale: true,
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
        name: 'unit',
        label: this.$lang.t('Unit'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: unitsT305D007A,
        useLocale: true,
        required: true,
        width: '200px'
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-305d007a {
    height: 100%;
  }
</style>
