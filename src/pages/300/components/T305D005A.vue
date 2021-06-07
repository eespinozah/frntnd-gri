<template>
  <div class="table-305d005a">
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
  name: 'app-t305d005a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't305-5a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'initiative',
        label: this.$lang.t('Reduction initiatives'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Reduction value'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-305d005a {
    height: 100%;
  }
</style>
