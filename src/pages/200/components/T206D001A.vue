<template>
  <div class="table-t206d001a">
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
  name: 'app-t206d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't206-1a'
    }
  },
  created() {
    this.columns = [
      {
        name: 'name',
        label: this.$lang.t('Case name'),
        type: 'text',
        required: true,
        width: '200px'
      },
      {
        name: 'completed',
        label: this.$lang.t('¿Completed?'),
        type: 'checkbox',
        required: true,
        width: '100px'
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text'
      },
      {
        name: 'outcomes',
        label: this.$lang.t('Main results of finalized legal actions'),
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t206d001a {
    height: 100%;
  }
</style>
