<template>
  <div class="form">
    <mr-form
      ref="form"
      :rows="rows"
      :showButtons="false"
    >
    </mr-form>
  </div>
</template>

<script>
export default {
  name: 'app-year',
  props: {
    year: Number
  },
  created() {
    this.rows = [
      [
        {
          type: 'empty'
        },
        {
          collection: 'years',
          initialValue: this.year,
          name: 'year',
          placeholder: this.$lang.t('Year'),
          required: true,
          textField: '@id',
          type: 'dropdown',
          valueField: '@id',
          width: '80px',
          immediate: true,
          onChange: value => {
            this.$emit('onChange', value);
          }
        }
      ]
    ];
  }
}
</script>

<style lang="scss" scoped>
  form {
    padding: 10px 0;
  }
</style>
