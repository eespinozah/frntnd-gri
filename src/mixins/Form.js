export default {
  methods: {
    getDataForm(form) {
      const formData = new FormData(form);
      const data     = {};

      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }

      return data;
    }
  }
};
