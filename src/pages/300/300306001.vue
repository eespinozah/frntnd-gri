<template>
  <Disclosure
    class="site-300306001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300306001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300306001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300306001
    }
  },
  provide() {
    return {
      getDestEnunId: this.getDestEnunId,
    };
  },
  data() {
    return {
      dest_enun_id: null
    };
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004(),
      this.get005()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
    },
    get001() {
      return [
        {
          name: '306-1',
          label: this.$lang.t('s306_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-306001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s306_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d001_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d001_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t306d001a'
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
                            name: 'd001_a_total',
                            label: this.$lang.t('s306_d001_a_total'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          },
                          {
                            name: 'd001_a_planned',
                            label: this.$lang.t('s306_d001_a_planned'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ],
                        [
                          {
                            name: 'd001_a_unplanned',
                            label: this.$lang.t('s306_d001_a_unplanned'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s306_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '306001',
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
          name: '306-2',
          label: this.$lang.t('s306_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-306002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s306_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d002_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_v'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_vi'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_vii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_viii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_a_ix'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t306d002ab'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_a_info',
                      label: this.$lang.t('s306_d002_a_info'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s306_d002_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d002_c_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_c_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d002_c_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c',
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
                name: '306002',
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
          name: '306-3',
          label: this.$lang.t('s306_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-306003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s306_d003_a'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s306_d003_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d003_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d003_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d003_b_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t306d003ab'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_info',
                      label: this.$lang.t('s306_d003_a_info'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_c',
                label: this.$lang.t('s306_d003_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '306003',
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
    get004() {
      return [
        {
          name: '306-4',
          label: this.$lang.t('s306_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-306004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s306_d004_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d004_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d004_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d004_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d004_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t306d004a'
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
                            name: 'd004_a_transported',
                            label: this.$lang.t('s306_d004_a_transported'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          },
                          {
                            name: 'd004_a_imported',
                            label: this.$lang.t('s306_d004_a_imported'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ],
                        [
                          {
                            name: 'd004_a_exported',
                            label: this.$lang.t('s306_d004_a_exported'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          },
                          {
                            name: 'd004_a_treated',
                            label: this.$lang.t('s306_d004_a_treated'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ]
                ]
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
                      name: 'd004_b_shipped_percentage',
                      label: this.$lang.t('s306_d004_b_shipped_percentage'),
                      type: 'number',
                      readonly: true,
                      width: '200px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_c',
                label: this.$lang.t('s306_d004_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '306004',
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
    get005() {
      return [
        {
          name: '306-5',
          label: this.$lang.t('s306_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-306005',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s306_d005_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s306_d005_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d005_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s306_d005_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd005_a',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '306005',
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
  .site-300306001 { }
</style>
