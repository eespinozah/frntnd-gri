<template>
  <Disclosure
    class="site-200205001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200205001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200205001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200205001
    }
  },
  data() {
    return {
    };
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003()
    ];
  },
  methods: {
    get001() {
      return [
        {
          name: '205-1',
          label: this.$lang.t('s205_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-205001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                type: 'fieldset',
                labelDir: 'left',
                withPadding: false,
                rows: [
                  [
                    {
                      name: 'd001_a_total',
                      label: this.$lang.t('s205_d001_a_total'),
                      type: 'number',
                      width: '100px'
                    },
                    {
                      margin: '0 0 0 5px',
                      name: 'd001_a_percentage',
                      label: this.$lang.t('s205_d001_a_percentage'),
                      type: 'number',
                      width: '100px'
                    },
                    {
                      margin: '0 0 0 5px',
                      label: this.$lang.t('s205_d001_a_final'),
                      type: 'label',
                      align: 'left'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s205_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '205001',
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
          name: '205-2',
          label: this.$lang.t('s205_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-205002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s205_d002_a'),
                type: 'component',
                component: 'app-t205d002a'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s205_d002_b'),
                type: 'component',
                component: 'app-t205d002b'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s205_d002_c'),
                type: 'component',
                component: 'app-t205d002c'
              }
            ],
            [
              {
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd002_c_description',
                      label: this.$lang.t('s205_d002_c_description'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s205_d002_d'),
                type: 'component',
                component: 'app-t205d002d'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s205_d002_e'),
                type: 'component',
                component: 'app-t205d002e'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '205002',
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
    get003() {
      return [
        {
          name: '205-3',
          label: this.$lang.t('s205_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-205003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                type: 'fieldset',
                labelDir: 'left',
                withPadding: false,
                rows: [
                  [
                    {
                      name: 'd003_a_total',
                      type: 'number',
                      label: this.$lang.t('s205_d003_a_total'),
                      width: '100px'
                    },
                    {
                      margin: '0 0 0 5px',
                      type: 'label',
                      label: this.$lang.t('s205_d003_a_total_final'),
                      align: 'left'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_nature',
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      name: 'd003_b',
                      type: 'number',
                      label: this.$lang.t('s205_d003_b'),
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd003_c',
                      type: 'number',
                      label: this.$lang.t('s205_d003_c'),
                      width: '100px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_d',
                label: this.$lang.t('s205_d003_d'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '205003',
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
