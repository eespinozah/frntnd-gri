<template>
  <div class="form approach-head">
    <app-title v-if="title"
      :showLink="true"
      :digrId="103001001">{{title | t}}</app-title>
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
  name: 'app-head-with-materiality',
  props: {
    orga_id: Number,
    title: String,
    mato_id: Number,
    year: Number
  },
  data() {
    return {
      rowCollection: null,
      orga_id_: this.orga_id,
      year_: this.year,
      disabled: true
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
        immediate: true,
        onChange: (id, text, rowCollection) => {
          this.orga_id_ = id;
          this.rowCollection = rowCollection;

          if (!!this.year_ && !!this.orga_id_) {
            this.disabled = false;
          }

          this.rows = [this.setRows()];

          this.$forceUpdate();

          this.form.getField('mato_id').clear();
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
        width: '80px',
        immediate: true,
        onChange: (year) => {
          this.year_ = year;

          if (!!this.year_ && !!this.orga_id_) {
            this.disabled = false;
          }

          this.rows = [this.setRows()];

          this.$forceUpdate();

          this.form.getField('mato_id').clear();
        }
      });

      rows.push({
        disabled: this.disabled,
        initialValue: this.mato_id,
        name: 'mato_id',
        parentComponent: 'orga_id',
        collection: 'materiality',
        placeholder: this.$lang.t('Material topic'),
        queryString: `year=${this.year_}`,
        required: true,
        type: 'dropdown',
        valueField: '@id',
        textField: 'name',
        objectSearch: 'material_topic',
        width: '200px',
        afterFetch: dataCollection => {
          dataCollection._rows = dataCollection._rows.filter(r => r.getValue('is_present') );
          return dataCollection;
        }
      });

      rows.push({
        text: this.$lang.t('Buscar'),
        type: 'button',
        width: '100px',
        onClick: () => {

          if (!this.form.validate()) {
            return;
          }

          this.$emit('find', this.form.getValues());
        }
      });

      return rows;
    }
  }
}
</script>

<style lang="scss" scoped>
.approach-head {
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
