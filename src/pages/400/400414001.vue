<template>
  <Disclosure
    class="site-400414001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400414001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400414001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400414001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '414-1',
          label: this.$lang.t('s414_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-414001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s414_d001_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_a_total',
                      label: this.$lang.t('s414_d001_a_total'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_a_screened',
                      label: this.$lang.t('s414_d001_a_screened'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_a_percentage',
                      label: this.$lang.t('s414_d001_a_percentage'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '414001',
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
          name: '414-2',
          label: this.$lang.t('s414_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-414002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                withPadding: false,
                rows: [
                  [
                    {
                      name: 'd002_total',
                      label: this.$lang.t('s414_d002_total'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd002_a',
                      label: this.$lang.t('s414_d002_a'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd002_b_potential',
                      label: this.$lang.t('s414_d002_b_potential'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd002_b_actual',
                      label: this.$lang.t('s414_d002_b_actual'),
                      type: 'number',
                      width: '150px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_c',
                label: this.$lang.t('s414_d002_c'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd002_d',
                label: this.$lang.t('s414_d002_d_label'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd002_d',
                      label: this.$lang.t('s414_d002_d'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd002_d_percentage',
                      label: this.$lang.t('s414_d002_d_percentage'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: 'd002_e',
                label: this.$lang.t('s414_d002_e_label'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd002_e',
                      label: this.$lang.t('s414_d002_e'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_percentage',
                      label: this.$lang.t('s414_d002_e_percentage'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_e_why',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '414002',
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

<style lang="scss" scoped>
  .site-400414001 { }
</style>
