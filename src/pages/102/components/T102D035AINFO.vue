<template>
  <div class="table-t102d035ainfo">
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
      :afterFetch="afterFetch"
      :updateWithParent="false"
    >
    </mr-Table>
  </div>
</template>

<script>
import Table from '../../mixins/Table';

export default {
  name: 'app-t102d035ainfo',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-35a-info'
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'name',
        label: this.$lang.t('Nombre'),
        type: 'text',
        required: true
      },
      {
        name: 'position',
        label: this.$lang.t('Cargo'),
        type: 'text',
        required: true
      },
      {
        name: 'fixed',
        label: this.$lang.t('Sueldo fijo'),
        type: 'number',
        required: true
      },
      {
        name: 'variable',
        label: this.$lang.t('Sueldo variable'),
        type: 'number',
        required: true
      },
      {
        name: 'total',
        label: this.$lang.t('Sueldo total'),
        type: 'number',
        required: false,
        readonly: true
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {
        r.setValue('total', `${Number(r.getValue('fixed')) + Number(r.getValue('variable'))}`);
      });

      return dataCollection;
    },
  }
}
</script>

<style lang="scss" scoped>
  .table-t102d035ainfo {
    height: 100%;
  }
</style>
