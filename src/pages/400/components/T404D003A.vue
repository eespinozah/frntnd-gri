<template>
  <div class="table-t404d003a">
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
  name: 'app-t404d003a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't404-3a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        label: this.$lang.t('Employment category'),
        name: 'emca_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'employment-categories',
        object: 'employment_category',
        required: true
      },
      {
        name: 'female',
        label: this.$lang.t('Mujeres evaluadas'),
        type: 'number',
        required: true
      },
      {
        name: 'male',
        label: this.$lang.t('Hombres evaluados'),
        type: 'number',
        required: true
      },
      {
        name: 'female_perc',
        label: this.$lang.t('% de mujeres evaluadas'),
        type: 'number',
        readonly: true
      },
      {
        name: 'male_perc',
        label: this.$lang.t('% de hombres evaluados'),
        type: 'number',
        readonly: true
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t404d003a {
    height: 100%;
  }
</style>
