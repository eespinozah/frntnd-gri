<template>
  <div class="table-region">
    <mr-table
      collection="regions"
      :columns="columns"
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
  name: 'app-region',
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
  }
}
</script>

<style lang="scss" scoped>
.table-region {
  height: 100%;
}
</style>
