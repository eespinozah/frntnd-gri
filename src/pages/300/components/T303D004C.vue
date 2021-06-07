<template>
  <div class="table-t303d004c">
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
import fresh from '@data/fresh';

export default {
  name: 'app-t303d004c',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't303-4c'
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
        label: this.$lang.t('Water class'),
        name: 'fresh',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: fresh,
        useLocale: true,
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Quantity (m3)'),
        type: 'number',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t303d004c {
    height: 100%;
  }
</style>
