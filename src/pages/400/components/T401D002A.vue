<template>
  <div class="table-t401d002a">
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

export default {
  name: 'app-t401d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't401-2a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'silo_id',
        label: this.$lang.t('Significant location'),
        type: 'dropdown',
        required: true,
        valueField: '@id',
        textField: 'name',
        collection: 'significant-locations',
        object: 'significant_location',
        parentCollection: 'organizations',
        parentCollectionId: this.organizationId,
        required: true
      },
      {
        name: 'bene_id',
        label: this.$lang.t('Prestación entregada'),
        type: 'dropdown',
        required: true,
        valueField: '@id',
        textField: 'name',
        collection: 'benefits',
        object: 'benefit',
        parentCollection: 'organizations',
        parentCollectionId: this.organizationId,
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t401d002a {
    height: 100%;
  }
</style>
