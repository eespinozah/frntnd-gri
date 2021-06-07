<template>
  <mr-table
    ref="table"
    id="table-organizations"
    collection="organizations"
    :columns="columns"
    deletable
    editable
    :showAddRow="true">
  </mr-table>
</template>

<script>
export default {
  name: 'app-organizations',
  provide() {
    return {
      getStandard: this.getStandard
    }
  },
  computed: {
    standard() {
      return this.$attrs.standard;
    }
  },
  created() {
    this.columns = [
      {
        alwaysVisible: true,
        autofocus: true,
        name: 'name',
        label: this.$lang.t('Name'),
        type: 'link',
        required: true,
        width: '200px',
        url: (rowCollection) => {
          return `site/organization/${rowCollection.getId()}`;
        }
      },
      {
        name: 'description',
        label: this.$lang.t('Description'),
        type: 'text'
      }
    ];
  },
  methods: {
    getStandard() {
      return this.standard;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
