<template>
  <div class="table-305d001a">
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
import gas from '@data/gas';
import unitsT305D001A from '@data/unitsT305D001A';

export default {
  name: 'app-t305d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't305-1a'
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
        name: 'silo_id',
        label: this.$lang.t('Location with significant operation'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'significant-locations',
        object: 'significant_location',
        parentCollection: 'organizations',
        parentCollectionId: this.organizationId,
        useLocale: true,
        required: true,
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      },
      {
        name: 'gas',
        label: this.$lang.t('Greenhouse gas'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: gas,
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
        localData: unitsT305D001A,
        useLocale: true,
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-305d001a {
    height: 100%;
  }
</style>
