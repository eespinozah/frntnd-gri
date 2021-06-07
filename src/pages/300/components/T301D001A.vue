<template>
  <div class="table-t301d001a">
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
import renewable from '@data/renewable';
import external from '@data/external';

export default {
  name: 'app-t301d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't301-1a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'date',
        label: this.$lang.t('Date'),
        type: 'date',
        required: true
      },
      {
        name: 'name',
        label: this.$lang.t('Material'),
        type: 'text',
        required: true
      },
      {
        name: 'renewable',
        label: this.$lang.t('Class'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: renewable,
        useLocale: true,
        required: true
      },
      {
        label: this.$lang.t('Unit'),
        name: 'maun_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'material-units',
        object: 'material_unit',
        useLocale: true,
        required: true,
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
        type: 'number',
        required: true
      },
      {
        name: 'external',
        label: this.$lang.t('Origin of the material'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: external,
        useLocale: true,
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t301d001a {
    height: 100%;
  }
</style>
