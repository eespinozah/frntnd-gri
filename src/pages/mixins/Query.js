export default {
  watch: {
    '$route.query': {
      immediate: true,
      handler(query) {
        this.orga_id     = 0;
        this.year        = 0;
        this.my_sections = false;

        if (query.hasOwnProperty('orga_id')) {
          this.orga_id = Number(query.orga_id);
        }

        if (query.hasOwnProperty('year')) {
          this.year = Number(query.year);
        }

        if (query.hasOwnProperty('my_sections')) {
          this.my_sections = JSON.parse(query.my_sections);
        }

        if (this.orga_id && this.year) {
          this.$nextTick(() => this.refresh());
        }
      }
    }
  }
}
