<template>
  <div class="table-t302d003abd">
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
import destiny from '@data/destiny';

export default {
  name: 'app-t302d003abd',
  mixins: [Table],
  props: {
    collection: {
      type: String,
      default: 't302-3abd'
    }
  },
  inject: [
    'getDestEnunId'
  ],
  computed: {
    dest_enun_id() {
      return this.getDestEnunId();
    }
  },
  created() {
   this.columns = [
      {
        autofocus: true,
        name: 'metric',
        label: this.$lang.t('Parameter'),
        type: 'text',
        required: true
      },
      {
        name: 'unit',
        label: this.$lang.t('Unit'),
        type: 'text',
        required: true
      },
      {
        name: 'value',
        label: this.$lang.t('Value'),
        type: 'number',
        required: true
      },
      {
        label: this.$lang.t('Ratio within'),
        name: 'ratio_within',
        type: 'text',
        readonly: true
      },
      {
        label: this.$lang.t('Ratio outside'),
        name: 'ratio_outside',
        type: 'text',
        readonly: true
      },
      {
        label: this.$lang.t('Ratio both'),
        name: 'ratio_both',
        type: 'text',
        readonly: true
      },
      {
        label: this.$lang.t('Ratio unit'),
        name: 'ratio_unit',
        type: 'text',
        readonly: true
      }
    ];
  },
  methods: {
    async beforeUpdate(data, next) {
      return await next({ ...data, year: this.year, dest_enun_id: this.dest_enun_id });
    },
    refresh() {
      const query = { year: this.year};

      if (this.dest_enun_id)
        query['dest_enun_id'] = this.year;

      this.table.fetchWithQueryString(query);
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t302d003abd {
    height: 100%;
  }
</style>
