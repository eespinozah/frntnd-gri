<template>
  <div class="table-s012d040a">
    <mr-table
      ref="table"
      :autoLoad="true"
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
  name: 'app-t102d040a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-40a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'stakeholder',
        label: this.$lang.t('Grupos de interés'),
        type: 'text',
        required: true
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text',
        required: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-s012d040a {
    height: 100%;
  }
</style>
