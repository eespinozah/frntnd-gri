<template>
  <Disclosure
    class="site-300305001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300305001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300305001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300305001
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
      this.get005(),
      this.get006(),
      this.get007()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.refreshTables();
    },
    refreshTables() {
      // 305-2e
      this.form.setFieldValue('d002_e_ch4_desc',   this.form.getFieldValue('d001_e_ch4_desc'));
      this.form.setFieldValue('d002_e_ch4_factor', this.form.getFieldValue('d001_e_ch4_factor'));
      this.form.setFieldValue('d002_e_co2_desc',   this.form.getFieldValue('d001_e_co2_desc'));
      this.form.setFieldValue('d002_e_co2_factor', this.form.getFieldValue('d001_e_co2_factor'));
      this.form.setFieldValue('d002_e_hfc_desc',   this.form.getFieldValue('d001_e_hfc_desc'));
      this.form.setFieldValue('d002_e_hfc_factor', this.form.getFieldValue('d001_e_hfc_factor'));
      this.form.setFieldValue('d002_e_n2o_desc',   this.form.getFieldValue('d001_e_n2o_desc'));
      this.form.setFieldValue('d002_e_n2o_factor', this.form.getFieldValue('d001_e_n2o_factor'));
      this.form.setFieldValue('d002_e_nf3_desc',   this.form.getFieldValue('d001_e_nf3_desc'));
      this.form.setFieldValue('d002_e_nf3_factor', this.form.getFieldValue('d001_e_nf3_factor'));
      this.form.setFieldValue('d002_e_pfc_desc',   this.form.getFieldValue('d001_e_pfc_desc'));
      this.form.setFieldValue('d002_e_pfc_factor', this.form.getFieldValue('d001_e_pfc_factor'));
      this.form.setFieldValue('d002_e_sf6_desc',   this.form.getFieldValue('d001_e_sf6_desc'));
      this.form.setFieldValue('d002_e_sf6_factor', this.form.getFieldValue('d001_e_sf6_factor'));

      // 305-3f
      this.form.setFieldValue('d003_f_ch4_desc',   this.form.getFieldValue('d001_e_ch4_desc'));
      this.form.setFieldValue('d003_f_ch4_factor', this.form.getFieldValue('d001_e_ch4_factor'));
      this.form.setFieldValue('d003_f_co2_desc',   this.form.getFieldValue('d001_e_co2_desc'));
      this.form.setFieldValue('d003_f_co2_factor', this.form.getFieldValue('d001_e_co2_factor'));
      this.form.setFieldValue('d003_f_hfc_desc',   this.form.getFieldValue('d001_e_hfc_desc'));
      this.form.setFieldValue('d003_f_hfc_factor', this.form.getFieldValue('d001_e_hfc_factor'));
      this.form.setFieldValue('d003_f_n2o_desc',   this.form.getFieldValue('d001_e_n2o_desc'));
      this.form.setFieldValue('d003_f_n2o_factor', this.form.getFieldValue('d001_e_n2o_factor'));
      this.form.setFieldValue('d003_f_nf3_desc',   this.form.getFieldValue('d001_e_nf3_desc'));
      this.form.setFieldValue('d003_f_nf3_factor', this.form.getFieldValue('d001_e_nf3_factor'));
      this.form.setFieldValue('d003_f_pfc_desc',   this.form.getFieldValue('d001_e_pfc_desc'));
      this.form.setFieldValue('d003_f_pfc_factor', this.form.getFieldValue('d001_e_pfc_factor'));
      this.form.setFieldValue('d003_f_sf6_desc',   this.form.getFieldValue('d001_e_sf6_desc'));
      this.form.setFieldValue('d003_f_sf6_factor', this.form.getFieldValue('d001_e_sf6_factor'));
    },
    get001() {
      return [
        {
          name: '305-1',
          label: this.$lang.t('s305_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305001',
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
                       label: this.$lang.t('s305_d001_a'),
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
                height: '200px',
                type: 'component',
                component: 'app-t305d001a'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d001_b'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                withPadding: false,
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d001_b_co2'),
                      name: 'd001_b_co2',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_ch4'),
                      name: 'd001_b_ch4',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_n2o'),
                      name: 'd001_b_n2o',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_hfc'),
                      name: 'd001_b_hfc',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_pfc'),
                      name: 'd001_b_pfc',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_sf6'),
                      name: 'd001_b_sf6',
                      type: 'checkbox',
                      readonly: true
                    },
                    {
                      label: this.$lang.t('s305_d001_b_nf3'),
                      name: 'd001_b_nf3',
                      type: 'checkbox',
                      readonly: true
                    },
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
                      name: 'd001_c',
                      label: this.$lang.t('s305_d001_c'),
                      type: 'number',
                      width: '200px'
                    }
                  ],
                  [
                    {
                      name: 'd001_d_year',
                      label: this.$lang.t('s305_d001_d'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      align: 'left',
                      label: this.$lang.t('s305_d001_d_end'),
                      type: 'label'
                    }
                  ]
                ]
              }
            ],
            [
              {
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd001_d_i',
                      label: this.$lang.t('s305_d001_d_i'),
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
                            name: 'd001_d_ii',
                            label: this.$lang.t('s305_d001_d_ii'),
                            type: 'number',
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_d_iii',
                      label: this.$lang.t('s305_d001_d_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s305_d001_e'),
                type: 'label',
              }
            ],
            [
              {
                name: 'd001_e_table',
                type: 'fieldset',
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Gas efecto invernadero'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Factor emisión'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Descripción'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_co2'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_co2_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_co2_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_ch4'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_ch4_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_ch4_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_n2o'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_n2o_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_n2o_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_hfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_hfc_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_hfc_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_pfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_pfc_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_pfc_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_sf6'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_sf6_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_sf6_desc',
                      type: 'text'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_nf3'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_nf3_factor',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd001_e_nf3_desc',
                      type: 'text'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_f',
                label: this.$lang.t('s305_d001_f'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_g',
                label: this.$lang.t('s305_d001_g'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '305001',
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
          name: '305-2',
          label: this.$lang.t('s305_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305002',
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
                       name: 'd002_a_total',
                       label: this.$lang.t('s305_d002_a'),
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
                height: '200px',
                type: 'component',
                component: 'app-t305d002a'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s305_d002_b'),
                type: 'component',
                component: 'app-t305d002b'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d002_c'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d002_c_co2'),
                      name: 'd002_c_co2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_ch4'),
                      name: 'd002_c_ch4',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_n2o'),
                      name: 'd002_c_n2o',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_hfc'),
                      name: 'd002_c_hfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_pfc'),
                      name: 'd002_c_pfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_sf6'),
                      name: 'd002_c_sf6',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d002_c_nf3'),
                      name: 'd002_c_nf3',
                      type: 'checkbox'
                    },
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
                      name: 'd002_d_year',
                      label: this.$lang.t('s305_d002_d'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      align: 'left',
                      label: this.$lang.t('s305_d002_d_end'),
                      type: 'label'
                    }
                  ]
                ]
              }
            ],
            [
              {
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd002_d_i',
                      label: this.$lang.t('s305_d002_d_i'),
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
                            name: 'd002_d_ii',
                            label: this.$lang.t('s305_d002_d_ii'),
                            type: 'number',
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_d_iii',
                      label: this.$lang.t('s305_d002_d_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: 'd001_e_table',
                type: 'fieldset',
                label: this.$lang.t('s305_d002_e'),
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Gas efecto invernadero'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Factor emisión'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Descripción'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_co2'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_co2_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_co2_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_ch4'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_ch4_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_ch4_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_n2o'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_n2o_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_n2o_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_hfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_hfc_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_hfc_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_pfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_pfc_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_pfc_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_sf6'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_sf6_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_sf6_desc',
                      type: 'text',
                      readonly: true,
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_nf3'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd002_e_nf3_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd002_e_nf3_desc',
                      type: 'text',
                      readonly: true
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_f',
                label: this.$lang.t('s305_d002_f'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_g',
                label: this.$lang.t('s305_d002_g'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '305002',
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
          name: '305-3',
          label: this.$lang.t('s305_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305003',
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
                       label: this.$lang.t('s305_d003_a'),
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
                height: '200px',
                type: 'component',
                component: 'app-t305d003a'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d003_b'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d003_b_co2'),
                      name: 'd003_b_co2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_ch4'),
                      name: 'd003_b_ch4',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_n2o'),
                      name: 'd003_b_n2o',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_hfc'),
                      name: 'd003_b_hfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_pfc'),
                      name: 'd003_b_pfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_sf6'),
                      name: 'd003_b_sf6',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d003_b_nf3'),
                      name: 'd003_b_nf3',
                      type: 'checkbox'
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
                      name: 'd003_c',
                      label: this.$lang.t('s305_d003_c'),
                      type: 'number',
                      width: '200px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_d',
                label: this.$lang.t('s305_d003_d'),
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
                      name: 'd003_e_year',
                      label: this.$lang.t('s305_d003_e'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      align: 'left',
                      label: this.$lang.t('s305_d003_e_end'),
                      type: 'label'
                    }
                  ]
                ]
              }
            ],
            [
              {
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd003_e_i',
                      label: this.$lang.t('s305_d003_e_i'),
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
                            name: 'd003_d_ii',
                            label: this.$lang.t('s305_d003_e_ii'),
                            type: 'number',
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_e_iii',
                      label: this.$lang.t('s305_d003_e_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: 'd001_e_table',
                type: 'fieldset',
                label: this.$lang.t('s305_d003_f'),
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Gas efecto invernadero'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Factor emisión'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Descripción'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_co2'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_co2_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_co2_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_ch4'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_ch4_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_ch4_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_n2o'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_n2o_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_n2o_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_hfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_hfc_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_hfc_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_pfc'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_pfc_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_pfc_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_sf6'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_sf6_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_sf6_desc',
                      type: 'text',
                      readonly: true
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d001_e_nf3'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      name: 'd003_f_nf3_factor',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd003_f_nf3_desc',
                      type: 'text',
                      readonly: true
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_g',
                label: this.$lang.t('s305_d003_g'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '305003',
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
          name: '305-4',
          label: this.$lang.t('s305_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s305_d004_a'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d004_b'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d004_c'),
                type: 'label'
              }
            ],
            [
              {
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d004_c_scope1'),
                      name: 'd004_c_scope1',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_c_scope2'),
                      name: 'd004_c_scope2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_c_scope3'),
                      name: 'd004_c_scope3',
                      type: 'checkbox'
                    }
                  ]
                ]
              }
            ],
            [
              {
                labelDir: 'right',
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t305d004ab'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s305_d004_d'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d004_d_co2'),
                      name: 'd004_d_co2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_ch4'),
                      name: 'd004_d_ch4',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_n2o'),
                      name: 'd004_d_n2o',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_hfc'),
                      name: 'd004_d_hfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_pfc'),
                      name: 'd004_d_pfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_sf6'),
                      name: 'd004_d_sf6',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d004_d_nf3'),
                      name: 'd004_d_nf3',
                      type: 'checkbox'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '305004',
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
          name: '305-5',
          label: this.$lang.t('s305_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305005',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s305_d005_a'),
                type: 'component',
                component: 'app-t305d005a'
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd005_a_total',
                      label: this.$lang.t('s305_d005_a_total'),
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
                label: this.$lang.t('s305_d005_b'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d005_b_co2'),
                      name: 'd005_b_co2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_ch4'),
                      name: 'd005_b_ch4',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_n2o'),
                      name: 'd005_b_n2o',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_hfc'),
                      name: 'd005_b_hfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_pfc'),
                      name: 'd005_b_pfc',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_sf6'),
                      name: 'd005_b_sf6',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_b_nf3'),
                      name: 'd005_b_nf3',
                      type: 'checkbox'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d005_c'),
                name: 'd005_c',
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s305_d005_d'),
                labelDir: 'right',
                type: 'fieldset',
                width: 'fit-content',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d005_d_scope1'),
                      name: 'd005_d_scope1',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_d_scope2'),
                      name: 'd005_d_scope2',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s305_d005_d_scope3'),
                      name: 'd005_d_scope3',
                      type: 'checkbox'
                    }
                  ],
                ]
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d005_e'),
                name: 'd005_e',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '305005',
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
          name: '305-6',
          label: this.$lang.t('s305_d006'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305006',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s305_d006_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd006_a_produced',
                      label: this.$lang.t('s305_d006_a_produced'),
                      type: 'number',
                      width: '150px',
                      onBlur(value, name, form) {
                        let d006_a_produced  = value;
                        let d006_a_destroyed = form.getFieldValue('d006_a_destroyed');
                        let d006_a_used      = form.getFieldValue('d006_a_used');

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      },
                      onValue(value, name, form) {
                        let d006_a_produced  = value;
                        let d006_a_destroyed = form.getFieldValue('d006_a_destroyed');
                        let d006_a_used      = form.getFieldValue('d006_a_used');

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      }
                    },
                    {
                      name: 'd006_a_destroyed',
                      label: this.$lang.t('s305_d006_a_destroyed'),
                      type: 'number',
                      width: '150px',
                      onBlur(value, name, form) {
                        let d006_a_produced  = form.getFieldValue('d006_a_produced');
                        let d006_a_destroyed = value;
                        let d006_a_used      = form.getFieldValue('d006_a_used');

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      },
                      onValue(value, name, form) {
                        let d006_a_produced  = form.getFieldValue('d006_a_produced');
                        let d006_a_destroyed = value;
                        let d006_a_used      = form.getFieldValue('d006_a_used');

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      }
                    },
                    {
                      name: 'd006_a_used',
                      label: this.$lang.t('s305_d006_a_used'),
                      type: 'number',
                      width: '150px',
                      onBlur(value, name, form) {
                        let d006_a_produced  = form.getFieldValue('d006_a_produced');
                        let d006_a_destroyed = form.getFieldValue('d006_a_destroyed');
                        let d006_a_used      = value;

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      },
                      onValue(value, name, form) {
                        let d006_a_produced  = form.getFieldValue('d006_a_produced');
                        let d006_a_destroyed = form.getFieldValue('d006_a_destroyed');
                        let d006_a_used      = value;

                        if (d006_a_produced)
                          d006_a_produced  = Number(d006_a_produced);

                        d006_a_destroyed = d006_a_destroyed ? Number(d006_a_destroyed) : 0;
                        d006_a_used      = d006_a_used ? Number(d006_a_used) : 0;

                        if (d006_a_produced)
                          form.setFieldValue('d006_a_production', (d006_a_produced - d006_a_destroyed - d006_a_used));
                        else
                          form.setFieldValue('d006_a_production', '');
                      }
                    }
                  ],
                  [
                    {
                      name: 'd006_a_production',
                      label: this.$lang.t('s305_d006_a_production'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd006_a_import',
                      label: this.$lang.t('s305_d006_a_import'),
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd006_a_export',
                      label: this.$lang.t('s305_d006_a_export'),
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
                label: this.$lang.t('s305_d006_b'),
                name: 'd006_b',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d006_c'),
                name: 'd006_c',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d006_d'),
                name: 'd006_d',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d006_docu_gid')
            ],
            [
              {
                name: '305006',
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
          name: '305-7',
          label: this.$lang.t('s305_d007'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-305007',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s305_d007_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s305_d007_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d007_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d007_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d007_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d007_a_v'),
                      type: 'label'
                    }
                  ],[
                    {
                      label: this.$lang.t('s305_d007_a_vi'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s305_d007_a_vii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t305d007a'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d007_b'),
                name: 'd007_b',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s305_d007_c'),
                name: 'd007_c',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d007_docu_gid')
            ],
            [
              {
                name: '305007',
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
  .site-300305001 {
    /deep/ .body {
      form {
        [data-name="d001_e_table"] {
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
              grid-template-columns: 174px 174px 1fr;
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

                &:nth-child(3) {
                  label {
                    flex: 1 1 auto;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
