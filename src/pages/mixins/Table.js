export default {
  inject: ['disclosure', 'getChange', 'getOrganizationId', 'getYear'],
  computed: {
    change() {
      return this.getChange();
    },
    organizationId() {
      return this.getOrganizationId();
    },
    table() {
      return this.$refs.table;
    },
    year() {
      return this.getYear();
    }
  },
  mounted() {
    this.table.$on('update-datacollection', () => this.$emit('refresh'));
    this.disclosure.$on('fetch', () => this.refresh());
  },
  methods: {
    async beforeUpdate(data, next) {
      return await next({ ...data, year: this.year });
    },
    refresh() {
      this.table.fetchWithQueryString({ year: this.year });
    }
  }
};
