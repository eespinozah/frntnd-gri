<template>
  <Disclosure
    class="site-102004001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102004001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';
import answer from '@data/answer';

export default {
  name: 'app-102004001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102004001
    }
  },
  created() {
    this.rows = [
      this.get018(),
      this.get019(),
      this.get020(),
      this.get021(),
      this.get022(),
      this.get023(),
      this.get024(),
      this.get025(),
      this.get026(),
      this.get027(),
      this.get028(),
      this.get029(),
      this.get030(),
      this.get031(),
      this.get032(),
      this.get033(),
      this.get034(),
      this.get035(),
      this.get036(),
      this.get037(),
      this.get038(),
      this.get039()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;
    },
    get018() {
      return [
        {
          name: '102-18',
          label: this.$lang.t('s102_d018'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd018_a',
                label: this.$lang.t('s102_d018_a'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd018_b',
                label: this.$lang.t('s102_d018_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd018_b_economics',
                      label: this.$lang.t('s102_d018_b_economics'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd018_b_environmental',
                      label: this.$lang.t('s102_d018_b_environmental'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd018_b_social',
                      label: this.$lang.t('s102_d018_b_social'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d018_docu_gid')
            ],
            [
              {
                name: '102018',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get019() {
      return [
        {
          name: '102-19',
          label: this.$lang.t('s102_d019'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd019_a_economics',
                label: this.$lang.t('s102_d019_a_economics'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd019_a_environmental',
                label: this.$lang.t('s102_d019_a_environmental'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd019_a_social',
                label: this.$lang.t('s102_d019_a_social'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d019_docu_gid')
            ],
            [
              {
                name: '102019',
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
    get020() {
      return [
        {
          name: '102-20',
          label: this.$lang.t('s102_d020'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '200px',
                name: 'd020_a',
                label: this.$lang.t('s102_d020_a'),
                type: 'component',
                component: 'app-t102d020ab'
              }
            ],
            [
              this.getFieldFileStorage('d020_docu_gid')
            ],
            [
              {
                name: '102020',
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
    get021() {
      return [
        {
          name: '102-21',
          label: this.$lang.t('s102_d021'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '200px',
                name: 'd021_a',
                label: this.$lang.t('s102_d021_a'),
                type: 'component',
                component: 'app-t102d021ab'
              }
            ],
            [
              this.getFieldFileStorage('d021_docu_gid')
            ],
            [
              {
                name: '102021',
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
    get022() {
      return [
        {
          name: '102-22',
          label: this.$lang.t('s102_d022'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '300px',
                name: 'd022_a',
                label: this.$lang.t('s102_d022_a'),
                type: 'component',
                component: 'app-t102d022a'
              }
            ],
            [
              {
                height: '100px',
                name: 'd022_a_info',
                label: this.$lang.t('s102_d022_a_info'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d022_docu_gid')
            ],
            [
              {
                name: '102022',
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
    get023() {
      return [
        {
          name: '102-23',
          label: this.$lang.t('s102_d023'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                withPadding: false,
                rows: [
                  [
                    {
                      name: 'd023_a',
                      label: this.$lang.t('s102_d023_a'),
                      type: 'dropdown',
                      valueField: '@id',
                      textField: 'name',
                      useLocale: true,
                      localCollection: true,
                      localData: answer
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd023_b',
                label: this.$lang.t('s102_d023_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d023_docu_gid')
            ],
            [
              {
                name: '102023',
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
    get024() {
      return [
        {
          name: '102-24',
          label: this.$lang.t('s102_d024'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd024_a',
                label: this.$lang.t('s102_d024_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd024_b',
                label: this.$lang.t('s102_d024_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d024_docu_gid')
            ],
            [
              {
                name: '102024',
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
    get025() {
      return [
        {
          name: '102-25',
          label: this.$lang.t('s102_d025'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd025_a',
                label: this.$lang.t('s102_d025_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd025_b',
                label: this.$lang.t('s102_d025_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d025_docu_gid')
            ],
            [
              {
                name: '102025',
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
    get026() {
      return [
        {
          name: '102-26',
          label: this.$lang.t('s102_d026'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd026_a',
                label: this.$lang.t('s102_d026_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d026_docu_gid')
            ],
            [
              {
                name: '102026',
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
    get027() {
      return [
        {
          name: '102-27',
          label: this.$lang.t('s102_d027'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd027_a',
                label: this.$lang.t('s102_d027_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d027_docu_gid')
            ],
            [
              {
                name: '102027',
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
    get028() {
      return [
        {
          name: '102-28',
          label: this.$lang.t('s102_d028'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd028_a',
                label: this.$lang.t('s102_d028_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd028_b',
                label: this.$lang.t('s102_d028_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd028_c',
                label: this.$lang.t('s102_d028_c'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd028_d',
                label: this.$lang.t('s102_d028_d'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d028_docu_gid')
            ],
            [
              {
                name: '102028',
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
    get029() {
      return [
        {
          name: '102-29',
          label: this.$lang.t('s102_d029'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd029_a',
                label: this.$lang.t('s102_d029_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd029_b',
                label: this.$lang.t('s102_d029_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d029_docu_gid')
            ],
            [
              {
                name: '102029',
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
    get030() {
      return [
        {
          name: '102-30',
          label: this.$lang.t('s102_d030'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd030_a',
                label: this.$lang.t('s102_d030_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d030_docu_gid')
            ],
            [
              {
                name: '102030',
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
    get031() {
      return [
        {
          name: '102-31',
          label: this.$lang.t('s102_d031'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd031_a',
                label: this.$lang.t('s102_d031_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d031_docu_gid')
            ],
            [
              {
                name: '102031',
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
    get032() {
      return [
        {
          name: '102-32',
          label: this.$lang.t('s102_d032'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd032_a',
                label: this.$lang.t('s102_d032_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d032_docu_gid')
            ],
            [
              {
                name: '102032',
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
    get033() {
      return [
        {
          name: '102-33',
          label: this.$lang.t('s102_d033'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd033_a',
                label: this.$lang.t('s102_d033_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d033_docu_gid')
            ],
            [
              {
                name: '102033',
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
    get034() {
      return [
        {
          name: '102-34',
          label: this.$lang.t('s102_d034'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd034_a',
                label: this.$lang.t('s102_d034_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd034_b',
                label: this.$lang.t('s102_d034_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d034_docu_gid')
            ],
            [
              {
                name: '102034',
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
    get035() {
      return [
        {
          name: '102-35',
          label: this.$lang.t('s102_d035'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d035_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd035_a_i',
                      label: this.$lang.t('s102_d035_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      name: 'd035_a_info',
                      label: this.$lang.t('s102_d035_a_info'),
                      type: 'component',
                      component: 'app-t102d035ainfo'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd035_a_ii',
                      label: this.$lang.t('s102_d035_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd035_a_iii',
                      label: this.$lang.t('s102_d035_a_iii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd035_a_iv',
                      label: this.$lang.t('s102_d035_a_iv'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd035_a_v',
                      label: this.$lang.t('s102_d035_a_v'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd035_b',
                label: this.$lang.t('s102_d035_b'),
                type: 'textarea',
              }
            ],
            [
              this.getFieldFileStorage('d035_docu_gid')
            ],
            [
              {
                name: '102035',
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
    get036() {
      return [
        {
          name: '102-36',
          label: this.$lang.t('s102_d036'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd036_a',
                label: this.$lang.t('s102_d036_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd036_b',
                label: this.$lang.t('s102_d036_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd036_c',
                label: this.$lang.t('s102_d036_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d036_docu_gid')
            ],
            [
              {
                name: '102036',
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
    get037() {
      return [
        {
          name: '102-37',
          label: this.$lang.t('s102_d037'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd037_a',
                label: this.$lang.t('s102_d037_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd037_b',
                label: this.$lang.t('s102_d037_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d037_docu_gid')
            ],
            [
              {
                name: '102037',
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
    get038() {
      return [
        {
          name: '102-38',
          label: this.$lang.t('s102_d038'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d038_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd038_a_highest',
                      label: this.$lang.t('s102_d038_a_highest'),
                      type: 'number',
                      width: '100px',
                      onBlur(value, name, form) {
                        let d038_a_highest = value;
                        let d038_a_median  = form.getFieldValue('d038_a_median');

                        if (d038_a_median && d038_a_highest) {
                          d038_a_median  = Number(d038_a_median);
                          d038_a_highest = Number(d038_a_highest);

                          form.setFieldValue('d038_a_ratio', d038_a_highest/d038_a_median);
                        }
                      },
                      onValue(value, name, form) {
                        let d038_a_highest = value;
                        let d038_a_median  = form.getFieldValue('d038_a_median');

                        if (d038_a_median && d038_a_highest) {
                          d038_a_median  = Number(d038_a_median);
                          d038_a_highest = Number(d038_a_highest);

                          form.setFieldValue('d038_a_ratio', d038_a_highest/d038_a_median);
                        }
                      }
                    }
                  ],
                  [
                    {
                      name: 'd038_a_median',
                      label: this.$lang.t('s102_d038_a_median'),
                      type: 'number',
                      width: '100px',
                      onBlur(value, name, form) {
                        let d038_a_median  = value;
                        let d038_a_highest = form.getFieldValue('d038_a_highest');

                        if (d038_a_median && d038_a_highest) {
                          d038_a_median  = Number(d038_a_median);
                          d038_a_highest = Number(d038_a_highest);

                          form.setFieldValue('d038_a_ratio', d038_a_highest/d038_a_median);
                        }
                      },
                      onValue(value, name, form) {
                        let d038_a_median  = value;
                        let d038_a_highest = form.getFieldValue('d038_a_highest');

                        if (d038_a_median && d038_a_highest) {
                          d038_a_median  = Number(d038_a_median);
                          d038_a_highest = Number(d038_a_highest);

                          form.setFieldValue('d038_a_ratio', d038_a_highest/d038_a_median);
                        }
                      }
                    }
                  ],
                  [
                    {
                      name: 'd038_a_ratio',
                      label: this.$lang.t('s102_d038_a_ratio'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d038_docu_gid')
            ],
            [
              {
                name: '102038',
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
    get039() {
      return [
        {
          name: '102-39',
          label: this.$lang.t('s102_d039'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d039_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd039_a_this_highest',
                      label: this.$lang.t('s102_d039_a_i'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd039_a_highest_increase',
                      label: this.$lang.t('s102_d039_a_ii'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd039_a_this_median',
                      label: this.$lang.t('s102_d039_a_iii'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd039_a_median_increase',
                      label: this.$lang.t('s102_d039_a_iv'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd039_a_ratio',
                      label: this.$lang.t('s102_d039_a_v'),
                      readonly: true,
                      type: 'number',
                      width: '100px'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d039_docu_gid')
            ],
            [
              {
                name: '102039',
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
