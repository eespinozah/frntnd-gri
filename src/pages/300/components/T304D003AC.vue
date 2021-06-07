<template>
  <div class="table-304d003ac">
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
  name: 'app-t304d003ac',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't304-3ac'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'habitat',
        label: this.$lang.t('Habitat'),
        type: 'text',
        required: true
      },
      {
        name: 'size',
        label: this.$lang.t('Area (km2)'),
        type: 'number',
        required: true
      },
      {
        autofocus: true,
        name: 'location',
        label: this.$lang.t('Location'),
        type: 'text',
        required: true
      },
      {
        autofocus: true,
        name: 'status',
        label: this.$lang.t('Status'),
        type: 'text',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Description of restoration measures'),
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-304d003ac {
    height: 100%;
  }
</style>
