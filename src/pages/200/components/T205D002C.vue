<template>
  <div class="table-t205d002c">
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
  name: 'app-t205d002c',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't205-2c'
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

        r.setValue('percentage', `${Number(r.getValue('communicated')) / Number(r.getValue('total')) * 100}`);

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
          name: 'type',
          label: this.$lang.t('Partner type'),
          type: 'text',
          required: true
        },
        {
          name: 'total',
          label: this.$lang.t('Number of partners'),
          required: true,
          type: 'number'
        },
        {
          name: 'communicated',
          label: this.$lang.t('Number of partners to whom it was communicated'),
          required: true,
          type: 'number'
        },
        {
          name: 'percentage',
          label: this.$lang.t('% of partners communicated'),
          type: 'number',
          readonly: true
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t205d002c {
    height: 100%;
  }
</style>
