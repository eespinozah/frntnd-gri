<template>
  <div class="form disclosure-head">
    <app-title v-if="title"
      :showLink="showLink"
      :digrId="digrId">{{title}}</app-title>
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
  name: 'app-head',
  props: {
    my_sections: Boolean,
    orga_id: Number,
    year: Number,
    showMySections: {
      type: Boolean,
      default: true
    },
    title: String,
    showLink: Boolean,
    digrId: Number
  },
  data() {
    return {
      rowCollection: null
    };
  },
  computed: {
    form() {
      return this.$refs.form;
    }
  },
  watch: {
    rowCollection(rowCollection) {
      if (this.orga_id === rowCollection.getId()) {
        const significant_location_definition = this.rowCollection.getValue('significant_location_definition');
        this.$emit('significant_location_definition', significant_location_definition);
      }
    }
  },
  created() {
    this.rows = [this.setRows()];
  },
  methods: {
    setRows() {
      const rows = [];

      rows.push({
        type: 'empty'
      });

      rows.push({
        collection: 'organizations',
        initialValue: this.orga_id,
        name: 'orga_id',
        placeholder: this.$lang.t('Organization'),
        required: true,
        textField: 'name',
        type: 'dropdown',
        valueField: '@id',
        width: '250px',
        immediate: !!this.orga_id,
        onChange: (id, text, rowCollection) => {
          this.rowCollection = rowCollection;
        }
      });

      rows.push({
        collection: 'years',
        initialValue: this.year,
        name: 'year',
        placeholder: this.$lang.t('Year'),
        required: true,
        textField: '@id',
        type: 'dropdown',
        valueField: '@id',
        width: '80px'
      });

      if (this.showMySections) {
        rows.push({
          initialValue: this.my_sections,
          label: this.$lang.t('My sections'),
          name: 'my_sections',
          type: 'checkbox',
          width: '100px'
        });
      }

      rows.push({
        text: this.$lang.t('Buscar'),
        type: 'button',
        width: '100px',
        onClick: () => {

          if (!this.form.validate()) {
            return;
          }

          const values = this.form.getValues();

          if (this.rowCollection)
            values.set('significant_location_definition', this.rowCollection.getValue('significant_location_definition'));

          this.$emit('find', values);

        }
      });

      return rows;
    }
  }
}
</script>

<style lang="scss" scoped>
.disclosure-head {
  display: flex;

  .app-title {
    flex: 0 1 auto;
    margin-right: 10px;
  }

  form {
    flex:  1 1 auto;
    padding: 0 0 10px 0;

    /deep/ input {
      &[name="orga_id"] {
        align-self: flex-end;
        max-width: 300px;
      }
    }
  }

}

</style>
