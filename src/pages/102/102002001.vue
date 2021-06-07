<template>
  <Disclosure
    class="site-102002001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102002001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';

export default {
  name: 'app-102002001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102002001
    }
  },
  created() {
    this.rows = [
      this.get014(),
      this.get015()
    ];
  },
  methods: {
    get014() {
      return [
        {
          name: '102-14',
          label: this.$lang.t('s102_d014'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
           [
              {
                height: '100px',
                name: 'd014_a',
                label: this.$lang.t('s102_d014_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d014_docu_gid')
            ],
            [
              {
                name: '102014',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get015() {
      return [
        {
          name: '102-15',
          label: this.$lang.t('s102_d015'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd015_a',
                height: '100px',
                label: this.$lang.t('s102_d015_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d015_docu_gid')
            ],
            [
              {
                name: '102015',
                height: '30px',
                type: 'component',
                component: 'app-status',
                withOmitted: true
              }
            ]
          ]
        }
      ];
    }
  }
}
</script>
