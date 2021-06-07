<template>
  <div class="table-region" :style="{ 'height': height }">
    <mr-table
      ref="table"
      :autoLoad="true"
      :columns="columns"
      collection="regions"
      :editable="true"
      :expanded="expanded"
      parentCollection="organizations"
      :parentCollectionId="organizationId"
      :showAddRow="true"
      @expand="expand"
      :updateWithParent="false"
    >
    </mr-Table>
  </div>
</template>

<script>
export default {
  name: 'app-region',
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
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Name'),
        required: true,
        type: 'text',
        width: '200px'
      },
      {
        alwaysVisible: true,
        name: 'description',
        label: this.$lang.t('Description'),
        required: false,
        type: 'text'
      },
    ];
  },
  methods: {
    expand(row) {
      this.$nextTick(() => {
        setTimeout(() => {
          const t = row.$el.querySelector('.table-t102d008').__vue__;
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
