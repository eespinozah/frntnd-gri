<template>
  <div class="table-t202d001c">
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
import type_male from '@data/type_male';

export default {
  name: 'app-t202d001c',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't202-1c'
    }
  },
  watch: {
    organizationId() {
      this.columns = this.getColumns();
    }
  },
  created() {
    this.columns = this.getColumns();
  },
   methods: {
    getColumns() {
      return [
        {
          autofocus: true,
          alwaysVisible: true,
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
          required: true,
          width: '200px'
        },
        {
          name: 'type_id_female',
          label: this.$lang.t('Female'),
          type: 'dropdown',
          valueField: '@id',
          textField: 'name',
          useLocale: true,
          localCollection: true,
          localData: type_male,
          required: true
        },
        {
          name: 'type_id_male',
          label: this.$lang.t('Male'),
          type: 'dropdown',
          valueField: '@id',
          textField: 'name',
          useLocale: true,
          localCollection: true,
          localData: type_male,
          required: true
        },
        {
          name: 'description',
          label: this.$lang.t('Description'),
          type: 'text',
        },
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t202d001c {
    height: 100%;
  }
</style>
