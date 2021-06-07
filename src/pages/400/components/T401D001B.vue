<template>
  <div class="table-t401d001b">
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
  name: 'app-t401d001b',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't401-1b'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'regi_id',
        label: this.$lang.t('Region'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        collection: 'regions',
        object: 'region',
        parentCollection: 'organizations',
        parentCollectionId: this.organizationId,
        required: false,
        width: '150px'
      },
      {
        name: 'm_g1',
        label: this.$lang.t('Hombre < 30'),
        type: 'number',
        required: false
      },
      {
        name: 'm_g1_r',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'f_g1',
        label: this.$lang.t('Mujeres < 30'),
        type: 'number',
        required: false
      },
      {
        name: 'f_g1_r',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'm_g2',
        label: this.$lang.t('Hombre 30-50'),
        type: 'number',
        required: false
      },
      {
        name: 'm_g2_r',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'f_g2',
        label: this.$lang.t('Mujeres 30-50'),
        type: 'number',
        required: false
      },
      {
        name: 'f_g2_r',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'm_g3',
        label: this.$lang.t('Hombre > 50'),
        type: 'number',
        required: false
      },
      {
        name: 'm_g3_r',
        label: this.$lang.t('%'),
        type: 'text',
        readonly: true,
        width: '80px'
      },
      {
        name: 'f_g3',
        label: this.$lang.t('Mujeres > 50'),
        type: 'number',
        required: false
      },
      {
        name: 'f_g3_r',
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
  .table-t401d001b {
    height: 100%;
  }
</style>
