<template>
  <div class="table-t102d008">
    <mr-table
      ref="table"
      :autoLoad="true"
      :columns="columns"
      :collection="collection"
      goURL=""
      parentCollection="regions"
      :parentCollectionId="regionId"
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
import employment_contract from '@data/employment_contract';
import employment_type from '@data/employment_type';

export default {
  name: 'app-t102d008',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't102-8abc'
    },
    rowCollectionParent: Object
  },
  computed: {
    regionId() {
      return this.rowCollectionParent.getId();
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
        label: this.$lang.t('Employment contract'),
        name: 'emco_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        useLocale: true,
        localCollection: true,
        localData: employment_contract,
        required: true
      },
      {
        label: this.$lang.t('Employment type'),
        name: 'emty_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        useLocale: true,
        localCollection: true,
        localData: employment_type,
        required: true
      },
      {
        name: 'female',
        label: this.$lang.t('N° females'),
        type: 'number',
        required: true
      },
      {
        name: 'male',
        label: this.$lang.t('N° males'),
        type: 'number',
        required: true
      },
      {
        name: 'total',
        label: this.$lang.t('N° trabajadores'),
        type: 'number',
        readonly: true
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {
        r.setValue('total', `${Number(r.getValue('female')) + Number(r.getValue('male'))}`);
      });

      return dataCollection;
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t102001001d008 {
    height: 100%;
  }
</style>
