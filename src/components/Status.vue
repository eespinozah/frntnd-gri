<template>
  <div class="status">
    <mr-form
      ref="formBase"
      :autoLoad="false"
      :rows="rowsBase"
      :showButtons="false"
    >
    </mr-form>
    <mr-form v-show="params.status === false && withOmitted"
      ref="formOmitted"
      :autoLoad="false"
      :rows="rowsOmitted"
      :showButtons="false"
    >
    </mr-form>
  </div>
</template>

<script>
import status from '@data/status';
import DisclosureAssigments from '@services/disclosure-assigments';

export default {
  name: 'app-status',
  inject: ['getDigrId', 'getOrganizationId', 'getYear'],
  props: {
    withOmitted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    digrId() {
      return this.getDigrId();
    },
    formBase() {
      return this.$refs.formBase;
    },
    formOmitted() {
      return this.$refs.formOmitted;
    },
    organizationId() {
      return this.getOrganizationId();
    },
    year() {
      return this.getYear()
    }
  },
  created() {
    this.assigments  = new DisclosureAssigments(this, this.digrId);

    this.rowsBase    = [this.getRowBase()];
    this.rowsOmitted = [this.getRowOmitted()];
  },
  data() {
    return {
      params: {
        status:  null,
        omre_id: null,
        omission_explanation: null
      }
    };
  },
  methods: {
    clearFormOmitted() {
      this.formOmitted.clear();
      this.params.omre_id              = null;
      this.params.omission_explanation = null;
    },
    async save() {
      const params = {
        ...this.params,
        orga_id: this.organizationId,
        year:    this.year
      };

      const assigment = await this.assigments.save(this.rowCollection.getValue('@id'), params);
      this.$emit('assigment', assigment);
    },

    setValue(rowCollection) {
      this.rowCollection = rowCollection;

      this.params.status  = rowCollection.getValue('status');
      this.formBase.setFieldValue('status', this.params.status);

      if (this.params.status === false) {
        this.params.omre_id = rowCollection.getValue('omre_id');
        this.params.omission_explanation = rowCollection.getValue('omission_explanation');

        this.formOmitted.setValues(this.rowCollection);
      } else {
        this.clearFormOmitted();
      }
    },
    getRowBase() {
      const rows = [
        {
          initialValue: this.status,
          name: 'status',
          type: 'radiogroup',
          valueField: '@id',
          textField: 'name',
          localCollection: true,
          localData: this.withOmitted ? status : status.filter(s => s.name !== 'Omitted'),
          useLocale: true,
          onChange: (status, text, form) => {
            if (this.params.status === status) {
              return;
            }

            this.params.status = status;

            if (status !== false) {
              this.clearFormOmitted();
            }

            this.save();
          }
        }
      ];

      return rows;
    },
    getRowOmitted() {
      const rows = [
        {
          name: 'omre_id',
          label: this.$lang.t('Omission reason'),
          labelDir: 'left',
          type: 'dropdown',
          valueField: '@id',
          textField: 'name',
          collection: 'omission-reasons',
          object: 'omission_reason',
          useLocale: true,
          width: '350px',
          onChange: (omre_id) => {
            if (omre_id === null || this.params.omre_id == omre_id) {
              return;
            }

            this.params.omre_id = omre_id;
            this.save();
          }
        },
        {
          name: 'omission_explanation',
          label: this.$lang.t('Omission explanation'),
          labelDir: 'left',
          type: 'text',
          onBlur: (text) => {
            if (this.params.omission_explanation === text) {
              return;
            }

            this.params.omission_explanation = text;
            this.save();
          },
          onEnterAction: (text) => {
            if (this.params.omission_explanation === text) {
              return;
            }

            this.params.omission_explanation = text;
            this.save();
          }
        }
      ];

      return rows;
    }
  }
}
</script>

<style lang="scss" scoped>
  .status {
    display: flex;
    flex-direction: row;

    form {
      flex: 1 1 auto;
      padding: 0;

      &:nth-child(1) {
        flex: 0 1 auto;
        margin-right: 30px;
      }

      /deep/ .field {
        span {
          white-space: nowrap;
        }
      }
    }
  }

</style>
