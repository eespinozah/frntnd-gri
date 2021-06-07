<template>
  <div class="table-t102d022a">
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
import gender from '@data/gender';

export default {
  name: 'app-t102d022a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-22a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'position',
        label: this.$lang.t('Cargo'),
        type: 'text',
        required: true
      },
      {
        name: 'executive',
        label: this.$lang.t('Nivel ejecutivo'),
        type: 'checkbox'
      },
      {
        name: 'independent',
        label: this.$lang.t('Independencia'),
        type: 'checkbox'
      },
      {
        name: 'tenure',
        label: this.$lang.t('Antigüedad en el cargo (años)'),
        type: 'number',
        required: true
      },
      {
        name: 'other_positions',
        label: this.$lang.t('Nº cargos significativos'),
        type: 'number'
      },
      {
        name: 'commitments',
        label: this.$lang.t('Compromisos'),
        type: 'text',
      },
      {
        name: 'gender',
        label: this.$lang.t('Sexo'),
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        localCollection: true,
        localData: gender,
        useLocale: true,
        required: true,
      },
      {
        name: 'membership',
        label: this.$lang.t('Afiliación a grupos sociales minoritarios o infrarrepresentados'),
        type: 'text'
      },
      {
        name: 'competence',
        label: this.$lang.t('Competencia en temas ESGG'),
        type: 'checkbox'
      },
      {
        name: 'stakeholders',
        label: this.$lang.t('Grupos de interes a los que representa'),
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d022a {
    height: 100%;
  }
</style>
