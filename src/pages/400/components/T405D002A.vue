<template>
  <div class="table-t405d002a">
    <mr-table
      ref="table"
      :autoLoad="true"
      :columns="columns"
      :collection="collection"
      goURL=""
      parentCollection="significant-locations"
      :parentCollectionId="siloId"
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
  name: 'app-t405d002a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't405-2a'
    },
    rowCollectionParent: Object
  },
  computed: {
    siloId() {
      return this.rowCollectionParent.getId();
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
        name: 'salary_f',
        label: this.$lang.t('Salario base mujeres'),
        type: 'number',
        required: false
      },
      {
        name: 'salary_m',
        label: this.$lang.t('Salario base hombres'),
        type: 'number',
        required: false
      },
      {
        name: 'salary_ratio',
        label: this.$lang.t('Ratio'),
        type: 'number',
        readonly: true
      },
      {
        name: 'remuneration_f',
        label: this.$lang.t('Remuneración base mujeres'),
        type: 'number',
        required: false
      },
      {
        name: 'remuneration_m',
        label: this.$lang.t('Remuneración base hombres'),
        type: 'number',
        required: false
      },
      {
        name: 'remuneration_ratio',
        label: this.$lang.t('Ratio'),
        type: 'number',
        readonly: true
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t405d002A {
    height: 100%;
  }
</style>
