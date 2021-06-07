<template>
  <Disclosure
    class="site-200203001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200203001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200203001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200203001
    }
  },
  data() {
    return {
    };
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002()
    ];
  },
  methods: {
    get001() {
      return [
        {
          name: '203-1',
          label: this.$lang.t('s203_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-203001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_a',
                label: this.$lang.t('s203_d001_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s203_d001_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_c',
                label: this.$lang.t('s203_d001_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '203001',
                height: '30px',
                type: 'component',
                component: 'app-status',
                withOmitted: true
              }
            ]
          ]
        }
      ];
    },
    get002() {
      return [
        {
          name: '203-2',
          label: this.$lang.t('s203_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-203002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_a',
                label: this.$lang.t('s203_d002_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s203_d002_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '203002',
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
