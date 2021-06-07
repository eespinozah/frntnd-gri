<template>
  <Disclosure
    class="site-102001001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102001001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';

export default {
  name: 'app-102001001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102001001
    }
  },
  data() {
    return {
      _102D007: null
    };
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
      this.get010(),
      this.get011(),
      this.get012(),
      this.get013()
    ];
  },
  mounted() {
    this.$nextTick(() => {
      this.d008b = this.$el.querySelector('.table-t102d008b').__vue__;
    });
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;

      this.d008b.refresh();
    },
    get001() {
      return [
        {
          name: '102-1',
          label: this.$lang.t('s102_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd001_a',
                label: this.$lang.t('s102_d001_a'),
                type: 'text'
              }
            ],
            [
              {
                name: '102001',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get002() {
      return [
        {
          name: '102-2',
          label: this.$lang.t('s102_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd002_a',
                label: this.$lang.t('s102_d002_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s102_d002_b'),
                type: 'component',
                component: 'app-t102d002b'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '102002',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ]
    },
    get003() {
      return [
        {
          name: '102-3',
          label: this.$lang.t('s102_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd003_a',
                label: this.$lang.t('s102_d003_a'),
                type: 'text'
              }
            ],
            [
              {
                name: '102003',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ]
    },
    get004() {
      return [
        {
          name: '102-4',
          label: this.$lang.t('s102_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd004_a',
                label: this.$lang.t('s102_d004_a'),
                type: 'textarea'
              }
            ],
            [
              {
                name: '102004',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ]
    },
    get005() {
      return [
        {
          name: '102-5',
          label: this.$lang.t('s102_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd005_a',
                label: this.$lang.t('s102_d005_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '102005',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ]
    },
    get006() {
      return [
        {
          name: '102-6',
          label: this.$lang.t('s102_d006'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d006_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd006_a_i',
                      label: this.$lang.t('s102_d006_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd006_a_ii',
                      label: this.$lang.t('s102_d006_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd006_a_iii',
                      label: this.$lang.t('s102_d006_a_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d006_docu_gid')
            ],
            [
              {
                name: '102006',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ]
    },
    get007() {
      return [
        {
          name: '102-7',
          label: this.$lang.t('s102_d007'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d007_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd007_a_i',
                      label: this.$lang.t('s102_d007_a_i'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
                    },
                    {
                      name: 'd007_a_ii',
                      label: this.$lang.t('s102_d007_a_ii'),
                      type: 'number',
                      width: '100px'
                    },
                    {
                      name: 'd007_a_iii',
                      label: this.$lang.t('s102_d007_a_iii'),
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s102_d007_a_iv'),
                      labelDir: 'left',
                      type: 'fieldset',
                      rows: [
                        [
                          {
                            name: 'd007_a_iv_debt',
                            label: this.$lang.t('s102_d007_a_iv_debt'),
                            type: 'number',
                            width: '100px'
                          },
                          {
                            name: 'd007_a_iv_equity',
                            label: this.$lang.t('s102_d007_a_iv_equity'),
                            type: 'number',
                            width: '100px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      type: 'fieldset',
                      withPadding: false,
                      labelDir: 'left',
                      rows: [
                        [
                          {
                            name: 'd007_a_v',
                            label: this.$lang.t('s102_d007_a_v'),
                            type: 'number',
                            width: '50px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      type: 'fieldset',
                      withPadding: false,
                      labelDir: 'top',
                      rows: [
                        [
                          {
                            height: '100px',
                            name: 'd007_a_info',
                            label: this.$lang.t('s102_d007_a_info'),
                            type: 'textarea'
                          }
                        ]
                      ]
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d007_docu_gid')
            ],
            [
              {
                name: '102007',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get008() {
      return [
        {
          name: '102-8',
          label: this.$lang.t('s102_d008'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'region',
                height: '350px',
                label: this.$lang.t('Region'),
                type: 'component',
                component: 'app-region-readonly',
                expanded: 'app-t102d008'
              }
            ],
            [
              {
                label: this.$lang.t('s102_d008_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd008_a_permanent_female',
                      label: this.$lang.t('s102_d008_a_i'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_a_permanent_male',
                      label: this.$lang.t('s102_d008_a_ii'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_a_temporary_female',
                      label: this.$lang.t('s102_d008_a_iii'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_a_temporary_male',
                      label: this.$lang.t('s102_d008_a_iv'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s102_d008_b'),
                type: 'component',
                component: 'app-t102d008b'
              }
            ],
            [
              {
                label: this.$lang.t('s102_d008_c'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd008_c_full_time_female',
                      label: this.$lang.t('s102_d008_c_i'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_c_full_time_male',
                      label: this.$lang.t('s102_d008_c_ii'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_c_part_time_female',
                      label: this.$lang.t('s102_d008_c_iii'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    },
                    {
                      name: 'd008_c_part_time_male',
                      label: this.$lang.t('s102_d008_c_iv'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd008_d',
                label: this.$lang.t('s102_d008_d'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd008_e',
                label: this.$lang.t('s102_d008_e'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd008_f',
                label: this.$lang.t('s102_d008_f'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d008_docu_gid')
            ],
            [
              {
                name: '102008',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get009() {
      return [
        {
          name: '102-9',
          label: this.$lang.t('s102_d009'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd009_a',
                label: this.$lang.t('s102_d009_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d009_docu_gid')
            ],
            [
              {
                name: '102009',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get010() {
      return [
        {
          name: '102-10',
          label: this.$lang.t('s102_d010'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d010_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd010_a_i',
                      label: this.$lang.t('s102_d010_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd010_a_ii',
                      label: this.$lang.t('s102_d010_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd010_a_iii',
                      label: this.$lang.t('s102_d010_a_iii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd010_a_info',
                      label: this.$lang.t('s102_d010_a_info'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d010_docu_gid')
            ],
            [
              {
                name: '102010',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get011() {
      return [
        {
          name: '102-11',
          label: this.$lang.t('s102_d011'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd011_a',
                label: this.$lang.t('s102_d011_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d011_docu_gid')
            ],
            [
              {
                name: '102011',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get012() {
      return [
        {
          name: '102-12',
          label: this.$lang.t('s102_d012'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd012_a',
                label: this.$lang.t('s102_d012_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d012_docu_gid')
            ],
            [
              {
                name: '102012',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get013() {
      return [
        {
          name: '102-13',
          label: this.$lang.t('s102_d013'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd013_a',
                label: this.$lang.t('s102_d013_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d013_docu_gid')
            ],
            [
              {
                name: '102013',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    }
  }
}
</script>
