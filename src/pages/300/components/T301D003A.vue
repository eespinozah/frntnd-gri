<template>
  <div class="table-t301d003a">
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
  name: 'app-t301d003a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't301-3a'
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
        label: this.$lang.t('Product category'),
        name: 'prca_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'product-categories',
        object: 'product_category',
        useLocale: true,
        required: true,
      },
      {
        name: 'reclaimed',
        label: this.$lang.t('Total reclaimed'),
        type: 'number',
        required: true
      },
      {
        name: 'sold',
        label: this.$lang.t('Total products sold'),
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
