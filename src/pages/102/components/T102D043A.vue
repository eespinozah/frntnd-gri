<template>
  <div class="table-s012d043a">
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
  name: 'app-t102d043a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-43a'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'stakeholder_id',
        label: this.$lang.t('Stakeholder'),
        type: 'dropdown',
        required: true,
        valueField: '@id',
        textField: 'stakeholder',
        collection: 't102-40a',
        queryString: `year=${this.year}&orga_id=${this.organizationId}`,
        object: 'stakeholder',
        required: true,
        width: '200px'
      },
      {
        name: 'frequency',
        label: this.$lang.t('Frequency participation'),
        type: 'text',
        required: true
      },
      {
        name: 'engagement',
        label: this.$lang.t('Tipo relacionamiento'),
        type: 'text',
        required: true
      },
      {
        name: 'part',
        label: this.$lang.t('¿Participación en elaboración del reporte?'),
        type: 'checkbox'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
  .table-s012d043a {
    height: 100%;
  }
</style>
