<template>
  <Disclosure
    class="site-200202001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200202001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200202001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200202001
    }
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
          name: '202-1',
          label: this.$lang.t('s202_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-202001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s202_d001_a'),
                type: 'component',
                component: 'app-t202d001a'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s202_d001_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s202_d001_c'),
                type: 'component',
                component: 'app-t202d001c'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_d',
                label: this.$lang.t('s202_d001_d'),
                type: 'textarea',
                readonly: true
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '202001',
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
          name: '202-2',
          label: this.$lang.t('s202_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-202002',
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
                label: this.$lang.t('s202_d002_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s202_d002_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_c',
                label: this.$lang.t('s202_d002_c'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_d',
                label: this.$lang.t('s202_d002_d'),
                type: 'textarea',
                readonly: true
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '202002',
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
