<template>
  <div class="table-t301d002a">
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
  name: 'app-t301d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't301-2a'
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
        label: this.$lang.t('Input material'),
        type: 'text',
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
        label: this.$lang.t('Total'),
        type: 'number',
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t301d002a {
    height: 100%;
  }
</style>
