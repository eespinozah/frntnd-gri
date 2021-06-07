<template>
  <mr-form
    ref="form"
    collection="organizations"
    :collectionId="organizationId"
    :rows="rows"
  ></mr-form>
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
    this.rows = [
      [
        {
          name: 'name',
          label: this.$lang.t('Name'),
          type: 'text',
          required: true
        }
      ],
      [
        {
          name: 'description',
          label: this.$lang.t('Description'),
          type: 'text'
        }
      ],
      [
        {
          height: '100px',
          name: 'significant_location_definition',
          label: this.$lang.t('Significant location definition'),
          type: 'textarea'
        }
      ]
    ];
  }
}
</script>

<style lang="scss" scoped>
.table-significant-locations {
  height: 100%;
}
</style>
