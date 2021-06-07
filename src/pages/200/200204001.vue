<template>
  <Disclosure
    class="site-200204001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200204001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200204001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200204001
    }
  },
  created() {
    this.rows = [
      this.get001()
    ];
  },
  methods: {
    get001() {
      return [
        {
          name: '204-1',
          label: this.$lang.t('s204_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-204001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s204_d001_a'),
                type: 'component',
                component: 'app-t204d001a'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s204_d001_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_c',
                label: this.$lang.t('s204_d001_c'),
                type: 'textarea',
                readonly: true
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '204001',
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
