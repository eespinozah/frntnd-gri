<template>
  <div class="table-benefit">
    <mr-table
      collection="benefits"
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
  name: 'app-benefit',
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
.table-benefit {
  height: 100%;
}
</style>
