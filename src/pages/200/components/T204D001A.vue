<template>
  <div class="table-t204d001a">
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
  name: 'app-t204d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't204-1a'
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

        r.setValue('percentage', `${Number(r.getValue('local')) / Number(r.getValue('budget')) * 100}`);

      });

      return dataCollection;
    },
    getColumns() {
      return [
        {
          autofocus: true,
          alwaysVisible: true,
          name: 'silo_id',
          label: this.$lang.t('Significant location'),
          type: 'dropdown',
          required: true,
          valueField: '@id',
          textField: 'name',
          collection: 'significant-locations',
          object: 'significant_location',
          parentCollection: 'organizations',
          parentCollectionId: this.organizationId,
          required: true,
          width: '200px'
        },
        {
          name: 'budget',
          label: this.$lang.t('Total budget'),
          type: 'number',
        },
        {
          name: 'local',
          label: this.$lang.t('Local suppliers budget'),
          type: 'number',
        },
        {
          name: 'percentage',
          label: this.$lang.t('Percentage'),
          type: 'number',
          readonly: true
        },
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t204d001a {
    height: 100%;
  }
</style>
