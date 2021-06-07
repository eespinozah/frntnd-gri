<template>
  <div class="table-306d002ab">
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
import disposal from '@data/disposal';

export default {
  name: 'app-t306d002ab',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't306-2ab'
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
        name: 'disp_id',
        label: this.$lang.t('Disposal method'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: disposal,
        useLocale: true,
        required: true
      },
      {
        name: 'hazardous',
        label: this.$lang.t('Hazardous?'),
        type: 'checkbox',
        required: true,
        width: '100px'
      },
      {
        name: 'value',
        label: this.$lang.t('Value (t)'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-306d002ab {
    height: 100%;
  }
</style>
