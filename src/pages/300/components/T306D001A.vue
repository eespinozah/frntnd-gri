<template>
  <div class="table-306d001a">
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
  name: 'app-t306d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't306-1a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'destination',
        label: this.$lang.t('Destination'),
        type: 'text',
        required: true
      },
      {
        name: 'quality',
        label: this.$lang.t('Water quality'),
        type: 'text',
        required: true
      },
      {
        name: 'treatment',
        label: this.$lang.t('Method'),
        type: 'text',
        required: true
      },
      {
        name: 'planned',
        label: this.$lang.t('Planned?'),
        type: 'checkbox',
        required: true,
        width: '120px'
      },
      {
        name: 'reused',
        label: this.$lang.t('Was reused by another organization?'),
        type: 'checkbox',
        required: true,
        width: '150px'
      },
      {
        name: 'value',
        label: this.$lang.t('Volumen (m3)'),
        type: 'number',
        required: true,
        width: '120px'
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-306d001a {
    height: 100%;
  }
</style>
