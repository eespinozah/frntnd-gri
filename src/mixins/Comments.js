export default {
  inject: ['getDigrId', 'getOrganizationId', 'getYear'],
  props: {
    isLog: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    digrId() {
      return this.getDigrId();
    },
    organizationId() {
      return this.getOrganizationId();
    },
    year() {
      return this.getYear();
    }
  },
  data() {
    return {
      comments: []
    };
  },
  mounted() {
    this.$rest = this.$getRest('comments');
    this.$rest.sort = '-comm_id';
  },
  methods: {
    async refresh() {
        const queryString = `year=${this.year}&is_log=${this.isLog}`;
        this.$rest._collection = 'comments';
        const dataCollection = await this.$rest.doQueryString(queryString, `t${this.digrId}`, this.organizationId);

        this.comments = dataCollection.getRows();
    }
  }
}
