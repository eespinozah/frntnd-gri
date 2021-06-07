<template>
  <div class="table-t302d005a">
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
import destiny from '@data/destiny';

export default {
  name: 'app-t302d005a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't302-5a'
    }
  },
  created() {
   this.columns = [
      {
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Product or service'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Reduction value'),
        type: 'number',
        required: true
      },
      {
        label: this.$lang.t('Unit'),
        name: 'enun_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'energy-units',
        object: 'energy_unit',
        useLocale: true,
        required: true,
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t302d005a {
    height: 100%;
  }
</style>
