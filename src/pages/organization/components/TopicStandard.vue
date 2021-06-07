<template>
  <mr-table
    ref="table"
    id="table-topic-standard"
    collection="disclosures"
    :queryString="queryString"
    parentCollection="materiality"
    :parentCollectionId="materialityId"
    :columns="columns"
    deletable
    deleteWithParent
    usePut
    idField="disc_id"
    :showAddRow="showAddRow"
    :afterFetch="afterFetch">
  </mr-table>
</template>

<script>
export default {
  name: 'app-topic-standard',
  props: {
    materiality: Object
  },
  inject: [ 'getOrganizationId', 'getYear'],
  computed: {
    queryString() {
      return `orga_id=${this.organizationId}&year=${this.year}`;
    },
    organizationId() {
      return this.getOrganizationId();
    },
    year() {
      return this.getYear();
    },
    materialityId() {
      return this.materiality?.getId();
    },
    materialityIsPresent() {
      return this.materiality?.getValue('is_present');
    },
    showAddRow() {
      return !!this.year && !!this.materialityId && !!this.materialityIsPresent;
    }
  },
  created() {
    this.columns = [
      {
        autofocus: true,
        label: this.$lang.t('Topic standard'),
        name: 'stan_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'disc_name',
        collection: 'standards?stan_id!=102',
        object: 'standard',
        useLocale: true,
        required: true,
        afterFetch: (dataCollection) => {
          const rows = dataCollection.getRows();

          rows.forEach(r => {
            const text = this.$lang.t(`i${r.getId()}_disc_name`);
            r.setValue('disc_name', `${r.getValue('shortname')}: ${text}`);
          });

          return dataCollection;
        }
      },
      {
        label: this.$lang.t('Content'),
        name: 'disc_id',
        type: 'dropdown',
        valueField: '@id',
        textField: 'disc_name',
        collection: 'disclosures',
        object: 'disclosure',
        parentComponent: 'stan_id',
        useLocale: true,
        required: true,
        afterFetch(dataCollection) {
          const rows = dataCollection.getRows();

          rows.forEach(r => {
            const text = this.$lang.t(`i${r.getId()}_disc_name`);
            r.setValue('disc_name', `${r.getValue('shortname')}: ${text}`);
          });

          return dataCollection;
        }
      }
    ];
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        const disclosure = r.getValue('disclosure');
        disclosure.disc_name = disclosure.shortname + ': ' + this.$lang.t(`i${r.getValue('@id')}_disc_name`);

        const standard = {
          stan_id: disclosure.disclosure_group.sect_id,
          disc_name: disclosure.disclosure_group.section.shortname + ': ' + this.$lang.t(`i${disclosure.disclosure_group.sect_id}_disc_name`)
        };

        r.setValue('disclosure', disclosure);
        r.setValue('standard',   standard);
        r.setValue('stan_id', standard.stan_id);
        r.setValue('disc_id', r.getValue('@id'));

      });

      return dataCollection;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
