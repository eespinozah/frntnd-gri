<template>
  <div class="table-t404d001a">
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
  name: 'app-t404d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't404-1a'
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
        label: this.$lang.t('Horas de formación mujeres'),
        type: 'number',
        required: true
      },
      {
        name: 'male',
        label: this.$lang.t('Horas de formación hombres'),
        type: 'number',
        required: true
      },
      {
        name: 'female_avg',
        label: this.$lang.t('Media de horas de formación - Mujeres'),
        type: 'number',
        readonly: true
      },
      {
        name: 'male_avg',
        label: this.$lang.t('Media de horas de formación - Hombres'),
        type: 'number',
        readonly: true
      },
      {
        name: 'avg',
        label: this.$lang.t('Media de horas de formación'),
        type: 'number',
        readonly: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t404d001a {
    height: 100%;
  }
</style>
