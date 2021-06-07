<template>
  <Disclosure
    class="site-200201001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200201001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200201001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200201001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;

      this.calcD004ATotal();
    },
    async calcD001(orga_id,year) {
      const dataCollection = await this._201D001.fetch(orga_id, year);
      const rowCollection  = dataCollection.getFirstRowCollection();
    },
    calcD004ATotal() {
      const data = this.form.getValues();
      let total = 0;
      let hasValue = false;

      if (Number(data.get('d004_a_i_credit'))) {
        total += Number(data.get('d004_a_i_credit'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_i_relief'))) {
        total += Number(data.get('d004_a_i_relief'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_ii'))) {
        total += Number(data.get('d004_a_ii'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_iii_investments'))) {
        total += Number(data.get('d004_a_iii_investments'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_iii_other'))) {
        total += Number(data.get('d004_a_iii_other'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_iii_research'))) {
        total += Number(data.get('d004_a_iii_research'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_iv'))) {
        total += Number(data.get('d004_a_iv'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_v'))) {
        total += Number(data.get('d004_a_v'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_vi'))) {
        total += Number(data.get('d004_a_vi'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_vii'))) {
        total += Number(data.get('d004_a_vii'));
        hasValue = true;
      }

      if (Number(data.get('d004_a_viii'))) {
        total += Number(data.get('d004_a_viii'));
        hasValue = true;
      }

      this.form.setFieldValue('d004_a_total', hasValue ? total : '');
    },
    get001() {
      return [
        {
          name: '201-1',
          label: this.$lang.t('s201_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-201001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s201_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd001_a_justification',
                      label: this.$lang.t('s201_d001_a_justification'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      label: this.$lang.t('s201_d001_a_i'),
                      type: 'component',
                      component: 'app-t201d001ai'
                    }
                  ],
                  [
                    {
                      labelDir: 'left',
                      type: 'fieldset',
                      rows: [
                        [
                          {
                            name: 'd001_evg',
                            label: this.$lang.t('s201_d001_a_i_evg'),
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
                label: this.$lang.t('s201_d001_a_ii'),
                type: 'component',
                component: 'app-t201d001aii'
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_total001',
                      label: this.$lang.t('s201_d001_a_ii_total001'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_total002',
                      label: this.$lang.t('s201_d001_a_ii_total002'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_total003',
                      label: this.$lang.t('s201_d001_a_ii_total003'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_total004',
                      label: this.$lang.t('s201_d001_a_ii_total004'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_total005',
                      label: this.$lang.t('s201_d001_a_ii_total005'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_total100',
                      label: this.$lang.t('s201_d001_a_ii_total100'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_evd',
                      label: this.$lang.t('s201_d001_a_ii_evd'),
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
                label: this.$lang.t('s201_d001_a_iii'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_evr',
                      label: this.$lang.t('s201_d001_a_iii_evr'),
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
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s201_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '201001',
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
          name: '201-2',
          label: this.$lang.t('s201_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-201002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_0'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_i'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_ii'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_iii'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_iv'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s201_d002_a_v'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_a',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '201002',
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
          name: '201-3',
          label: this.$lang.t('s201_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-201003',
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
                      name: 'd003_a',
                      label: this.$lang.t('s201_d003_a'),
                      type: 'number',
                      width: '100px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s201_d003_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd003_b_i',
                      label: this.$lang.t('s201_d003_b_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_b_ii',
                      label: this.$lang.t('s201_d003_b_ii'),
                      type: 'textarea'
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
                            name: 'd003_b_iii',
                            label: this.$lang.t('s201_d003_b_iii'),
                            type: 'text',
                            width: '100px'
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
                name: 'd003_c',
                label: this.$lang.t('s201_d003_c'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd003_d',
                label: this.$lang.t('s201_d003_d'),
                type: 'text'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_e',
                label: this.$lang.t('s201_d003_e'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '201003',
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
          name: '201-4',
          label: this.$lang.t('s201_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-201004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                name: 'd004_a_table',
                type: 'fieldset',
                label: this.$lang.t('s201_d004_a'),
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Type'),
                      type: 'label'
                    },
                    {
                      label: this.$lang.t('Monetary value'),
                      type: 'label',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_i_relief'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_i_relief',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_i_credit'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_i_credit',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_ii'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_ii',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_iii_investments'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_iii_investments',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_iii_research'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_iii_research',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_iii_other'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_iii_other',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_iv'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_iv',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_v'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_v',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_vi'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_vi',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_vii'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_vii',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_viii'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_viii',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s201_d004_a_total'),
                      type: 'label'
                    },
                    {
                      name: 'd004_a_total',
                      type: 'number',
                      width: '150px',
                      readonly: true
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_c',
                label: this.$lang.t('s201_d004_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '201004',
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
  .disclosure {
    /deep/ fieldset {
      [data-name="d004_a_table"] {
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
            grid-template-columns: 1fr 174px;
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

</style>
