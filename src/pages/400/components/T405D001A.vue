<template>
  <div class="table-t405d001a">
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
  name: 'app-t405d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't405-1a'
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
        name: 'f_g1',
        label: this.$lang.t('Mujeres < 30'),
        type: 'number',
        required: true
      },
      {
        name: 'f_g1_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'f_g2',
        label: this.$lang.t('Mujeres 30-50'),
        type: 'number',
        required: true
      },
      {
        name: 'f_g2_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'f_g3',
        label: this.$lang.t('Mujeres > 50'),
        type: 'number',
        required: true
      },
      {
        name: 'f_g3_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'm_g1',
        label: this.$lang.t('Hombre < 30'),
        type: 'number',
        required: true
      },
      {
        name: 'm_g1_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'm_g2',
        label: this.$lang.t('Hombre 30-50'),
        type: 'number',
        required: true
      },
      {
        name: 'm_g2_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'm_g3',
        label: this.$lang.t('Hombre > 50'),
        type: 'number',
        required: true
      },
      {
        name: 'm_g3_perc',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t405d001A {
    height: 100%;
  }
</style>
