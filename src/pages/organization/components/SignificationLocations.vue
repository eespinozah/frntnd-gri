<template>
  <div class="table-significant-locations">
    <mr-table
      ref="table"
      :columns="columns"
      collection="significant-locations"
      editable
      showAddRow
      :updateWithParent="false"
      parentCollection="organizations"
      :parentCollectionId="organizationId">
    </mr-Table>
  </div>
</template>

<script>
export default {
  name: 'app-significant-locations',
  inject: [
    'getOrganizationId'
  ],
  computed: {
    organizationId() {
      return this.getOrganizationId();
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        alwaysVisible: true,
        name: 'name',
        label: this.$lang.t('Significant location'),
        type: 'text',
        required: true,
      },
      {
        alwaysVisible: true,
        name: 'description',
        label: this.$lang.t('Description'),
        required: false,
        type: 'text'
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.table-significant-locations {
  height: 100%;
}
</style>
