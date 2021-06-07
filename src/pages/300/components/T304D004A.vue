<template>
  <div class="table-304d004a">
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
  name: 'app-t304d004a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't304-4a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'species',
        label: this.$lang.t('Species'),
        type: 'text',
        required: true
      },
      {
        name: 'operation',
        label: this.$lang.t('Organization operation'),
        type: 'text',
        required: true
      },
      {
        label: this.$lang.t('Conservation level'),
        name: 'rile_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: conservation,
        useLocale: true,
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-304d004a {
    height: 100%;
  }
</style>
