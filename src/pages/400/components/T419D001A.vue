<template>
  <div class="table-t419d001a">
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
import monetary from '@data/monetary';

export default {
  name: 'app-t419d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't419-1a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        name: 'monetary',
        label: this.$lang.t('Tipo sanción'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: monetary,
        useLocale: true,
        required: true,
        width: '200px'
      },
      {
        name: 'date',
        label: this.$lang.t('Fecha sanción'),
        type: 'date',
        required: true,
        width: '150px'
      },
      {
        name: 'value',
        label: this.$lang.t('Valor multa'),
        type: 'number',
        required: false,
        width: '150px'
      },
      {
        name: 'description',
        label: this.$lang.t('Contexto en el que se incurrió en la multa o sanción no monetaria'),
        type: 'text',
        required: true
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t419d001a {
    height: 100%;
  }
</style>
