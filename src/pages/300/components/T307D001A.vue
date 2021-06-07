<template>
  <div class="table-307d001a">
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
  name: 'app-t307d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't307-1a'
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
        name: 'monetary',
        label: this.$lang.t('Monetary sanction?'),
        type: 'checkbox',
        required: true,
        width: '150px'
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Fine amount'),
        type: 'number',
        required: true,
        width: '200px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-307d001a {
    height: 100%;
  }
</style>
