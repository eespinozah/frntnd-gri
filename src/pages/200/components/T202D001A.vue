<template>
  <div class="table-t202d001a">
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
  name: 'app-t202d001a',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't202-1a'
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

        r.setValue('ratio_female', `${Number(r.getValue('entry_female')) / Number(r.getValue('minimum_female'))}`);
        r.setValue('ratio_male',   `${Number(r.getValue('entry_male'))   / Number(r.getValue('minimum_male'))}`);

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
          name: 'entry_female',
          label: this.$lang.t('Entry female'),
          type: 'number'
        },
        {
          name: 'entry_male',
          label: this.$lang.t('Entry male'),
          type: 'number',
          required: true
        },
        {
          name: 'minimum_female',
          label: this.$lang.t('Minimum female'),
          type: 'number',
          required: true
        },
        {
          name: 'minimum_male',
          label: this.$lang.t('Minimum male'),
          type: 'number',
          required: true
        },
        {
          name: 'ratio_female',
          label: this.$lang.t('Ratio female'),
          type: 'number',
          readonly: true
        },
        {
          name: 'ratio_male',
          label: this.$lang.t('Ratio male'),
          type: 'number',
          readonly: true
        }
      ];
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t202d001a {
    height: 100%;
  }
</style>
