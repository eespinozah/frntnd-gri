<template>
  <div class="table-significant-locations" :style="{ 'height': height }">
    <mr-table
      ref="table"
      :autoLoad="true"
      :columns="columns"
      collection="significant-locations"
      :expanded="expanded"
      parentCollection="organizations"
      :parentCollectionId="organizationId"
      :showAddRow="false"
      @expand="expand"
    >
    </mr-Table>
  </div>
</template>

<script>
export default {
  name: 'app-significant-locations',
  inject: [
    'getOrganizationId'
  ],
  props: {
    expanded: String,
    height: String,
    rowCollectionParent: Object
  },
  computed: {
    table() {
      return this.$refs.table;
    },
    organizationId() {
      return this.getOrganizationId();
    }
  },
  created() {
    this.columns = [
      {
        alwaysVisible: true,
        name: 'name',
        label: this.$lang.t('Significant location'),
        type: 'text'
      },
      {
        alwaysVisible: true,
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text'
      }
    ];
  },
  methods: {
    expand(row) {
      this.$nextTick(() => {
        setTimeout(() => {
          const t = row.$el.querySelector('.table-t405d002a').__vue__;
          t.table.$on('update-datacollection', dataCollection => {
            this.$emit('refresh');
          });
        }, 10);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
