export default class {
  constructor(component, disclosure, field) {
    this.disclosure = disclosure;
    this.$rest = component.$getRest(`calc/${field}`);
  }

  async fetch(orga_id, year) {
    return await this.$rest.doQueryString(`year=${year}`, this.disclosure, orga_id);
  }
}
