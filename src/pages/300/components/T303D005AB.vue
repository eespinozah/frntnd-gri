<template>
  <div class="table-t303d005ab">
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
import stress from '@data/stress';

export default {
  name: 'app-t303d005ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't303-5ab'
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
        label: this.$lang.t('Zone'),
        name: 'stress',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: stress,
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
  .table-t303d005ab {
    height: 100%;
  }
</style>
