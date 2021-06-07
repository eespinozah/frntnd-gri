<template>
  <Disclosure
    class="site-300303001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300303001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';
import Calc from '@services/calc-v2';

export default {
  name: 'app-300303001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300303001
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
    this._303D005 = new Calc(this, 't300303001', 'd5-ab');

    this.rows = [
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004(),
      this.get005()
    ];
  },
  mounted() {
    this._t303d004c3 = this.$el.querySelector('.table-t303d004c3').__vue__;
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;

      this.form.setFieldValue('t303d003c',  [orga_id, year]);

      this.form.setFieldValue('t303d004c2', [orga_id, year]);

      this.calcD005(orga_id, year);

      this._t303d004c3.refresh();
    },
    async calcD005(orga_id, year) {
      const dataCollection = await this._303D005.fetch(orga_id, year);
      const rowCollection  = dataCollection.getFirstRowCollection();

      this.form.setFieldValue('d005_summary_total',        rowCollection.getValue('summary.total'));
      this.form.setFieldValue('d005_summary_total_stress', rowCollection.getValue('summary.total_stress'));
      this.form.setFieldValue('d005_calc_total',           rowCollection.getValue('calc.total'));
      this.form.setFieldValue('d005_calc_total_stress',    rowCollection.getValue('calc.total_stress'));
      this.form.setFieldValue('d005_last_year_storage',    rowCollection.getValue('last_year_storage'));
      this.form.setFieldValue('d005_change_storage',       rowCollection.getValue('change_storage'));
    },
    get001() {
      return [
        {
          name: '303-1',
          label: this.$lang.t('s303_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-303001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                name: 'd001_a',
                height: '100px',
                label: this.$lang.t('s303_d001_a'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd001_b',
                height: '100px',
                label: this.$lang.t('s303_d001_b'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd001_c',
                height: '100px',
                label: this.$lang.t('s303_d001_c'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd001_d',
                height: '100px',
                label: this.$lang.t('s303_d001_d'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd001_info',
                height: '100px',
                label: this.$lang.t('s303_d001_info'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '303001',
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
          name: '303-2',
          label: this.$lang.t('s303_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-303002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s303_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d002_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d002_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d002_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d002_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      name: 'd002_a',
                      height: '100px',
                      type: 'textarea'
                    }
                  ],
                ]
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '303002',
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
          name: '303-3',
          label: this.$lang.t('s303_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-303003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s303_d003_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d003_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_a_v'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t303d003a'
                    }
                  ],
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s303_d003_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d003_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_b_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_b_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d003_b_v'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t303d003b'
                    }
                  ],
                ]
              }
            ],
            [
              {
                height: '695px',
                name: 't303d003c',
                label: this.$lang.t('s303_d003_c'),
                type: 'component',
                component: 'app-t303d003c'
              }
            ],
            [
              {
                name: 'd003_d',
                label: this.$lang.t('s303_d003_d'),
                height: '100px',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '303003',
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
          name: '303-4',
          label: this.$lang.t('s303_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-303004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s303_d004_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d004_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t303d004ab'
                    }
                  ],
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s303_d004_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d004_c_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_c_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t303d004c'
                    }
                  ],
                  [
                    {
                      height: '300px',
                      name: 't303d004c2',
                      type: 'component',
                      component: 'app-t303d004c2'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      name: 't303d004c3',
                      type: 'component',
                      component: 'app-t303d004c3'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s303_d004_d'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s303_d004_d_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_d_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s303_d004_d_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      name: 'd004_d',
                      height: '100px',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_e',
                label: this.$lang.t('s303_d004_e'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '303004',
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
          name: '303-5',
          label: this.$lang.t('s303_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-303005',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s303_d005_a'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s303_d005_b'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t303d005ab'
                    }
                  ],
                  [
                    {
                      name: 'd005_summary_total',
                      label: this.$lang.t('s303_d005_summary_total'),
                      type: 'number',
                      readonly: true,
                      width: '200px'
                    },
                    {
                      name: 'd005_summary_total_stress',
                      label: this.$lang.t('s303_d005_summary_total_stress'),
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
                label: this.$lang.t('s303_d005_calc'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd005_calc_total',
                      label: this.$lang.t('s303_d005_calc_total'),
                      type: 'number',
                      readonly: true,
                      width: '200px'
                    },
                    {
                      name: 'd005_calc_total_stress',
                      label: this.$lang.t('s303_d005_calc_total_stress'),
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
                label: this.$lang.t('s303_d005_c'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd005_c_total',
                      label: this.$lang.t('s303_d005_c_total'),
                      type: 'number',
                      width: '200px'
                    }
                  ],
                  [
                    {
                      name: 'd005_last_year_storage',
                      label: this.$lang.t('s303_d005_last_year_storage'),
                      type: 'number',
                      readonly: true,
                      width: '200px'
                    }
                  ],
                  [
                    {
                      name: 'd005_change_storage',
                      label: this.$lang.t('s303_d005_change_storage'),
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
                name: 'd005_d',
                label: this.$lang.t('s303_d005_d'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '303005',
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
  .site-300303001 {

  }
</style>
