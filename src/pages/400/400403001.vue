<template>
  <Disclosure
    class="site-400403001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400403001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400403001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400403001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004(),
      this.get005(),
      this.get006(),
      this.get007(),
      this.get008(),
      this.get009(),
      this.get010()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '403-1',
          label: this.$lang.t('s403_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d001_1'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s403_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d001_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s403_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '403001',
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
          name: '403-2',
          label: this.$lang.t('s403_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d002_1'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s403_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d002_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d002_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_a',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s403_d002_b'),
                name: 'd002_b',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s403_d002_c'),
                name: 'd002_c',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s403_d002_d'),
                name: 'd002_d',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '403002',
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
          name: '403-3',
          label: this.$lang.t('s403_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d003_1'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_a',
                label: this.$lang.t('s403_d003_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '403003',
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
          name: '403-4',
          label: this.$lang.t('s403_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d004_1'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_a',
                label: this.$lang.t('s403_d004_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_b',
                label: this.$lang.t('s403_d004_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '403004',
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
          name: '403-5',
          label: this.$lang.t('s403_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403005',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d005_1'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd005_a',
                label: this.$lang.t('s403_d005_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '403005',
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
    get006() {
      return [
        {
          name: '403-6',
          label: this.$lang.t('s403_d006'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403006',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d006_1'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd006_a',
                label: this.$lang.t('s403_d006_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd006_b',
                label: this.$lang.t('s403_d006_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d006_docu_gid')
            ],
            [
              {
                name: '403006',
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
    get007() {
      return [
        {
          name: '403-7',
          label: this.$lang.t('s403_d007'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403007',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                name: 'd007_a',
                height: '100px',
                label: this.$lang.t('s403_d007_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d007_docu_gid')
            ],
            [
              {
                name: '403007',
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
    get008() {
      return [
        {
          name: '403-8',
          label: this.$lang.t('s403_d008'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403008',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d008_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d008_a_i'),
                      labelDir: 'left',
                      type: 'fieldset',
                      rows: [
                        [
                          {
                            name: 'd008_a_i_e',
                            label: this.$lang.t('s403_d008_a_i_e'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_i_e_perc',
                            label: this.$lang.t('s403_d008_a_i_e_perc'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd008_a_i_ne_total',
                            label: this.$lang.t('s403_d008_a_i_ne_total'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_i_ne',
                            label: this.$lang.t('s403_d008_a_i_ne'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_i_ne_perc',
                            label: this.$lang.t('s403_d008_a_i_ne_perc'),
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
                      label: this.$lang.t('s403_d008_a_ii'),
                      labelDir: 'left',
                      type: 'fieldset',
                      rows: [
                        [
                          {
                            name: 'd008_a_ii_e',
                            label: this.$lang.t('s403_d008_a_ii_e'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_ii_e_perc',
                            label: this.$lang.t('s403_d008_a_ii_e_perc'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd008_a_ii_ne',
                            label: this.$lang.t('s403_d008_a_ii_ne'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_ii_ne_perc',
                            label: this.$lang.t('s403_d008_a_ii_ne_perc'),
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
                      label: this.$lang.t('s403_d008_a_iii'),
                      labelDir: 'left',
                      type: 'fieldset',
                      rows: [
                        [
                          {
                            name: 'd008_a_iii_e',
                            label: this.$lang.t('s403_d008_a_iii_e'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_iii_e_perc',
                            label: this.$lang.t('s403_d008_a_iii_e_perc'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd008_a_iii_ne',
                            label: this.$lang.t('s403_d008_a_iii_ne'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd008_a_iii_ne_perc',
                            label: this.$lang.t('s403_d008_a_iii_ne_perc'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
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
                name: 'd008_b',
                label: this.$lang.t('s403_d008_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd008_c',
                label: this.$lang.t('s403_d008_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d008_docu_gid')
            ],
            [
              {
                name: '403008',
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
    get009() {
      return [
        {
          name: '403-9',
          label: this.$lang.t('s403_d009'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403009',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d009_ab'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d009_ab_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d009_ab_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d009_ab_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      name: 'd009_ab_table',
                      type: 'fieldset',
                      labelDir: 'left',
                      rows: [
                        [
                          {
                            label: this.$lang.t('Consecuencia'),
                            type: 'label'
                          },
                          {
                            label: this.$lang.t('Nº trabajadores'),
                            type: 'label',
                            width: '150px'
                          },
                          {
                            label: this.$lang.t('Nº contratistas'),
                            type: 'label',
                            width: '150px'
                          },
                          {
                            label: this.$lang.t('Tasa de empleados'),
                            type: 'label',
                            width: '150px'
                          },
                          {
                            label: this.$lang.t('Tasa de no empleados'),
                            type: 'label',
                            width: '150px'
                          }
                        ],
                        [
                          {
                            label: this.$lang.t('s403_d009_ab_ii_label'),
                            type: 'label'
                          },
                          {
                            name: 'd009_a_i',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_b_i',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_a_i_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd009_b_i_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            label: this.$lang.t('s403_d009_ab_ii_label'),
                            type: 'label'
                          },
                          {
                            name: 'd009_a_ii',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_b_ii',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_a_ii_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd009_b_ii_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            label: this.$lang.t('s403_d009_ab_iii_label'),
                            type: 'label'
                          },
                          {
                            name: 'd009_a_iii',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_b_iii',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd009_a_iii_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd009_b_iii_ratio',
                            type: 'number',
                            readonly: true,
                            width: '150px'
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
                height: '200px',
                name: 'd009_a_iv',
                label: this.$lang.t('s403_d009_a_iv'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '200px',
                name: 'd009_b_iv',
                label: this.$lang.t('s403_d009_b_iv'),
                type: 'textarea'
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd009_a_v',
                      label: this.$lang.t('s403_d009_a_v'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd009_b_v',
                      label: this.$lang.t('s403_d009_b_v'),
                      type: 'number',
                      width: '150px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s403_d009_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d009_c_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d009_c_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d009_c_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd009_c',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd009_d',
                label: this.$lang.t('s403_d009_d'),
                type: 'textarea'
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
                      label: this.$lang.t('s403_d009_e'),
                      type: 'label',
                      width: '530px'
                    },
                    {
                      name: 'd009_e',
                      type: 'radiogroup',
                      valueField: '@id',
                      textField: 'name',
                      localCollection: true,
                      localData: [{ '@id': 200000, name: '200.000' }, { '@id': 1000000, name: '1.000.000' }],
                      width: '170px'
                    },
                    {
                      type: 'empty'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd009_f',
                label: this.$lang.t('s403_d009_f'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd009_g',
                label: this.$lang.t('s403_d009_g'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d009_docu_gid')
            ],
            [
              {
                name: '403009',
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
    get010() {
      return [
        {
          name: '403-10',
          label: this.$lang.t('s403_d010'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-403010',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s403_d010_ab'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d010_ab_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d010_ab_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      name: 'd010_ab_table',
                      type: 'fieldset',
                      labelDir: 'left',
                      rows: [
                        [
                          {
                            label: this.$lang.t('Información'),
                            type: 'label'
                          },
                          {
                            label: this.$lang.t('Nº de empleados'),
                            type: 'label',
                            width: '150px'
                          },
                          {
                            label: this.$lang.t('Nº trabajadores no empleados'),
                            type: 'label',
                            width: '190px'
                          }
                        ],
                        [
                          {
                            label: this.$lang.t('s403_d010_ab_i_label'),
                            type: 'label'
                          },
                          {
                            name: 'd010_a_i',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd010_b_i',
                            type: 'number',
                            width: '190px'
                          }
                        ],
                        [
                          {
                            label: this.$lang.t('s403_d010_ab_ii_label'),
                            type: 'label'
                          },
                          {
                            name: 'd010_a_ii',
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd010_b_ii',
                            type: 'number',
                            width: '190px'
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
                name: 'd010_a_iii',
                label: this.$lang.t('s403_d010_a_iii'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd010_b_iii',
                label: this.$lang.t('s403_d010_b_iii'),
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s403_d010_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s403_d010_c_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d010_c_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s403_d010_c_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd010_c',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd010_d',
                label: this.$lang.t('s403_d010_d'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd010_e',
                label: this.$lang.t('s403_d010_e'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d010_docu_gid')
            ],
            [
              {
                name: '403010',
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
  .site-400403001 {
    /deep/ .body {
      form {
        [data-name="d009_ab_table"] {
          .fieldset-body {
            border: 1px solid #CFDDDF;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(repeat-fill, minmax(30px, auto));
            gap: 0;
            margin: 0;
            padding: 0;
            width: 100%;

            .form-row {
              align-items: center;
              border-bottom: 1px solid rgba(200, 200, 200, 0.4);
              display: grid;
              grid-template-columns: 1fr 174px 174px 174px 174px;
              grid-template-rows: 1fr;
              margin-top: 0 !important;

              &:first-child {
                background-color: var(--color-table-header);

                .form-cell {
                  min-height: 30px;

                  label {
                    span {
                      color: #2c3e50;
                    }
                  }

                  &::after {
                    height: calc(100% - 10px);
                    top: 5px;
                  }
                }

              }

              .form-cell {
                align-items: center;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                padding: 0 12px;
                position: relative;
                margin: 0;
                min-height: 50px;

                label {
                  justify-content: flex-start;

                  span {
                    color: #8e959c;
                  }
                }

                &:first-child {
                  justify-content: flex-start;
                }

                &:last-child {
                  &::after {
                    display: none;
                  }
                }

                &::after {
                  background-color: rgba(100, 100, 100, 0.1);
                  content: "";
                  display: block;
                  height: calc(100% - 20px);
                  position: absolute;
                  right: 0;
                  top: 10px;
                  width: 1px;
                }
              }
            }
          }
        }

        [data-name="d010_ab_table"] {
          .fieldset-body {
            border: 1px solid #CFDDDF;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(repeat-fill, minmax(30px, auto));
            gap: 0;
            margin: 0;
            padding: 0;
            width: 100%;

            .form-row {
              align-items: center;
              border-bottom: 1px solid rgba(200, 200, 200, 0.4);
              display: grid;
              grid-template-columns: 1fr 174px 214px;
              grid-template-rows: 1fr;
              margin-top: 0 !important;

              &:first-child {
                background-color: var(--color-table-header);

                .form-cell {
                  min-height: 30px;

                  label {
                    span {
                      color: #2c3e50;
                    }
                  }

                  &::after {
                    height: calc(100% - 10px);
                    top: 5px;
                  }
                }

              }

              .form-cell {
                align-items: center;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                padding: 0 12px;
                position: relative;
                margin: 0;
                min-height: 50px;

                label {
                  justify-content: flex-start;

                  span {
                    color: #8e959c;
                  }
                }

                &:first-child {
                  justify-content: flex-start;
                }

                &:last-child {
                  &::after {
                    display: none;
                  }
                }

                &::after {
                  background-color: rgba(100, 100, 100, 0.1);
                  content: "";
                  display: block;
                  height: calc(100% - 20px);
                  position: absolute;
                  right: 0;
                  top: 10px;
                  width: 1px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
