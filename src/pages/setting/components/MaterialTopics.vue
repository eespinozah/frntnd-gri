<template>
  <mr-table
    ref="table"
    id="table-material-topics"
    collection="material-topics"
    :columns="columns"
    deletable
    editable
    :showAddRow="true">
  </mr-table>
</template>

<script>
export default {
  name: 'app-material-topics',
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
        type: 'text',
        required: true,
        width: '200px'
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
