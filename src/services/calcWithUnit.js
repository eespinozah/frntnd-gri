export default class {
  constructor(component, disclosure, field) {
    this.disclosure = disclosure;
    this.$rest = component.$getRest(`${field}/calc`);
  }

  async fetch(orga_id, year, dest_enun_id) {
    return await this.$rest.doQueryString(`year=${year}&dest_enun_id=${dest_enun_id}`, this.disclosure, orga_id);
  }
}
