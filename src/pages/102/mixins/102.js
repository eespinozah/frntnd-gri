import Disclosure from '@/pages/Disclosure';
import Files from '@/mixins/Files';

export default {
  mixins: [Files],
  components: { Disclosure },
  data() {
    return {
      assigments: null,
      form: null
    };
  },
  watch: {
    assigments: {
      immediate: false,
      handler(assigments) {
        const rows = assigments.getRows();

        rows.forEach(r => {
          const id = r.getId();
          this.form.setFieldValue(id, r);
        });
      }
    }
  },
  methods: {
    setForm(form) {
      this.form = form;
    }
  }
}
