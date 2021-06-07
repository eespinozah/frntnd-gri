<template>
  <div class="table-t205d002e">
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
  name: 'app-t205d002e',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't205-2e'
    }
  },
  watch: {
    organizationId() {
      this.columns = this.getColumns();
    }
  },
  created() {
    this.columns = this.getColumns();
  },
   methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        r.setValue('percentage', `${Number(r.getValue('trained')) / Number(r.getValue('total')) * 100}`);

      });

      return dataCollection;
    },
    getColumns() {
      return [
        {
          autofocus: true,
          alwaysVisible: true,
          name: 'regi_id',
          label: this.$lang.t('Region'),
          type: 'dropdown',
          required: true,
          valueField: '@id',
          textField: 'name',
          collection: 'regions',
          object: 'region',
          parentCollection: 'organizations',
          parentCollectionId: this.organizationId,
          required: true,
          width: '200px'
        },
        {
          name: 'emca_id',
          label: this.$lang.t('Employment category'),
          type: 'dropdown',
          required: true,
          valueField: '@id',
          textField: 'name',
          collection: 'employment-categories',
          object: 'employment_category',
          required: true,
          width: '200px'
        },
        {
          name: 'total',
          label: this.$lang.t('Number of employees'),
          required: true,
          type: 'number',
          readonly: true
        },
        {
          name: 'trained',
          label: this.$lang.t('Number with anti-corruption training'),
          required: true,
          type: 'number'
        },
        {
          name: 'percentage',
          label: this.$lang.t('% with anti-corruption training'),
          type: 'number',
          readonly: true
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t205d002a {
    height: 100%;
  }
</style>
