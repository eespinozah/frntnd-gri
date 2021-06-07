<template>
  <div class="table-materiality">
    <mr-table
      :autoLoad="false"
      selectable
      ref="table"
      id="table-materiality"
      collection="materiality"
      parentCollection="organizations"
      :parentCollectionId="getOrganizationId()"
      :columns="columns"
      keyField="false"
      @select="$emit('select', $event)">
    </mr-table>
  </div>
</template>

<script>
export default {
  name: 'app-materiality',
  props: {
    year: Number
  },
  inject: [
    'getOrganizationId'
  ],
  computed: {
    organizationId() {
      return this.getOrganizationId();
    },
    table() {
      return this.$refs.table;
    }
  },
  watch: {
    year: {
      immediate: true,
      handler(year) {
        if (year !== 0) {
          this.$nextTick(() => this.refresh());
        }
      }
    }
  },
  created() {
    this.columns = [
      {
        alwaysVisible: true,
        autofocus: true,
        name: 'material_topic.name',
        label: this.$lang.t('Material topic'),
        type: 'text',
        readonly: true
      },
      {
        disableUpdate: true,
        name: 'is_present',
        label: this.$lang.t(''),
        type: 'checkbox',
        width: '100px',
        onChange: async (check, cell, rowCollection) => {
          if (check) {
            await this.table.$rest.doPut(rowCollection.getId(), { year: this.year }, 'organizations', this.organizationId);
            rowCollection.setValue('is_present', true);
            this.$emit('select', rowCollection);
          }
          else {
            await this.table.$rest.doDelete(`${rowCollection.getId()}?year=${this.year}`, 'organizations', this.organizationId);
            rowCollection.setValue('is_present', false);
            this.$emit('select', rowCollection);
          }
        }
      }
    ];
  },
  methods: {
    refresh() {
      this.table.fetchWithQueryString({ year: this.year });
    }
  }
}
</script>

<style lang="scss" scoped>
.table-materiality {
  height: 100%;
}
</style>
