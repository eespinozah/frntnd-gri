export default class {
  constructor(component, disclosure) {
    this.disclosure = disclosure;
    this.$rest = component.$getRest('disclosure-disclosure-assigments');
  }

  async fetch(orga_id, year) {
    return await this.$rest.doQueryString(`orga_id=${orga_id}&year=${year}`, 'disclosure-group-submissions', this.disclosure);
  }

  async save(id, params) {
    return await this.$rest.doPatch(id, params);
  }
}
