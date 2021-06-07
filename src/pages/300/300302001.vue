<template>
  <Disclosure
    class="site-300302001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300302001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';
import CalcWithUnit from '@services/calcWithUnit';
import units302 from '@data/units302';

export default {
  name: 'app-300302001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300302001
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
  watch: {
    dest_enun_id(id) {
      if (id !== null) {
        this.calcD001(this.orga_id, this.year, id);
        this.calcD002(this.orga_id, this.year, id);
        this.calcD004(this.orga_id, this.year, id);
        this.calcD005(this.orga_id, this.year, id);
        this.t302d003abd.refresh();
        this.t302summaryab.refresh();
      }

    }
  },
  created() {
    this._302D001 = new CalcWithUnit(this, 't300302001', 'd1');
    this._302D002 = new CalcWithUnit(this, 't300302001', 'd2');
    this._302D004 = new CalcWithUnit(this, 't300302001', 'd4');
    this._302D005 = new CalcWithUnit(this, 't300302001', 'd5');

    this.rows = [
      this.get000(),
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004(),
      this.get005()
    ];
  },
  mounted() {
    this.$nextTick(() => {
      this.t302d003abd   = this.$el.querySelector('.table-t302d003abd').__vue__;
      this.t302summaryab = this.$el.querySelector('.table-t302summaryab').__vue__;
    });
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;

      if (this.dest_enun_id !== null) {
        this.calcD001(orga_id, year);
        this.calcD002(orga_id, year);
        this.calcD004(orga_id, year);
        this.calcD005(orga_id, year);
        this.t302summaryab.refresh();
      }
    },
    async calcD001(orga_id, year, dest_enun_id) {
      const dataCollection = await this._302D001.fetch(orga_id, year, dest_enun_id);
      const rowCollection  = dataCollection.getFirstRowCollection();

      this.form.setFieldValue('d001_a_total_unrenewable', `${rowCollection.getValue('fuel.unrenewable')} ${rowCollection.getValue('fuel.energy_unit.symbol')}`);
      this.form.setFieldValue('d001_a_total_renewable',   `${rowCollection.getValue('fuel.renewable')} ${rowCollection.getValue('fuel.energy_unit.symbol')}`);
      this.form.setFieldValue('d001_e_total', `${rowCollection.getValue('total')} ${rowCollection.getValue('energy_unit.symbol')}`);

      this.form.setFieldValue('d001_cd_consumption_electricity', `${rowCollection.getValue('energy.consumption.electricity')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_consumption_heating', `${rowCollection.getValue('energy.consumption.heating')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_consumption_cooling', `${rowCollection.getValue('energy.consumption.cooling')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_consumption_steam', `${rowCollection.getValue('energy.consumption.steam')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_self_generated_electricity', `${rowCollection.getValue('energy.self_generated.electricity')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_self_generated_heating', `${rowCollection.getValue('energy.self_generated.heating')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_self_generated_cooling', `${rowCollection.getValue('energy.self_generated.cooling')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_self_generated_steam', `${rowCollection.getValue('energy.self_generated.steam')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_sold_electricity', `${rowCollection.getValue('energy.sold.electricity')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_sold_heating', `${rowCollection.getValue('energy.sold.heating')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_sold_cooling', `${rowCollection.getValue('energy.sold.cooling')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d001_cd_sold_steam', `${rowCollection.getValue('energy.sold.steam')} ${rowCollection.getValue('energy_unit.symbol')}`);
    },
    async calcD002(orga_id, year, dest_enun_id) {
      const dataCollection = await this._302D002.fetch(orga_id, year, dest_enun_id);
      const rowCollection  = dataCollection.getFirstRowCollection();

      const total = Number(rowCollection.getValue('upstream')) + Number(rowCollection.getValue('downstream'));

      this.form.setFieldValue('d002_a_upstream', `${rowCollection.getValue('upstream')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d002_a_downstream',   `${rowCollection.getValue('downstream')} ${rowCollection.getValue('energy_unit.symbol')}`);
      this.form.setFieldValue('d002_a_total', `${total} ${rowCollection.getValue('energy_unit.symbol')}`);
    },
    async calcD004(orga_id, year, dest_enun_id) {
      const dataCollection = await this._302D004.fetch(orga_id, year, dest_enun_id);
      const rowCollection  = dataCollection.getFirstRowCollection();

      this.form.setFieldValue('d004_a_total', `${rowCollection.getValue('total')} ${rowCollection.getValue('energy_unit.symbol')}`);
    },
    async calcD005(orga_id, year, dest_enun_id) {
      const dataCollection = await this._302D005.fetch(orga_id, year, dest_enun_id);
      const rowCollection  = dataCollection.getFirstRowCollection();

      this.form.setFieldValue('d005_a_total', `${rowCollection.getValue('total')} ${rowCollection.getValue('energy_unit.symbol')}`);
    },
    getDestEnunId() {
      return this.dest_enun_id;
    },
    get000() {
      return [
        {
          labelDir: 'left',
          type: 'fieldset',
          withPadding: false,
          rows: [
            [
              {
                label: this.$lang.t('Power unit for displaying results and totals'),
                name: 'dest_enun_id',
                type: 'dropdown',
                valueField: '@id',
                textField: 'name',
                localCollection: true,
                localData: units302,
                useLocale: true,
                required: true,
                width: '150px',
                onChange: (id, value, rowCollection) => {
                  this.dest_enun_id = id;
                }
              }
            ]
          ]
        }
      ];
    },
    get001() {
      return [
        {
          name: '302-1',
          label: this.$lang.t('s302_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-302001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s302_d001_a'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s302_d001_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t302d001ab'
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
                            name: 'd001_a_total_renewable',
                            label: this.$lang.t('s302_d001_a_total_renewable'),
                            type: 'text',
                            readonly: true,
                            width: '200px'
                          },
                          {
                            name: 'd001_a_total_unrenewable',
                            label: this.$lang.t('s302_d001_a_total_unrenewable'),
                            type: 'text',
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
                      component: 'app-t302summaryab'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s302_d001_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s302_d001_c_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_c_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_c_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_c_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t302d001cd'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: 'd001_cd_table',
                type: 'fieldset',
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Type and destination'),
                      type: 'label'
                    },
                    {
                      label: this.$lang.t('Total2'),
                      type: 'label',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_consumption_electricity'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_consumption_electricity',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_consumption_heating'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_consumption_heating',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_consumption_cooling'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_consumption_cooling',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_consumption_steam'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_consumption_steam',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_self_generated_electricity'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_self_generated_electricity',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_self_generated_heating'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_self_generated_heating',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_self_generated_cooling'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_self_generated_cooling',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_self_generated_steam'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_self_generated_steam',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_sold_electricity'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_sold_electricity',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_sold_heating'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_sold_heating',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_sold_cooling'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_sold_cooling',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s302_d001_cd_sold_steam'),
                      type: 'label'
                    },
                    {
                      name: 'd001_cd_sold_steam',
                      type: 'text',
                      readonly: true,
                      width: '150px'
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
                      label: this.$lang.t('s302_d001_e_total'),
                      name: 'd001_e_total',
                      type: 'text',
                      readonly: true,
                      width: '150px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: 'd001_f',
                height: '100px',
                label: this.$lang.t('s302_d001_f'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd001_g',
                height: '100px',
                label: this.$lang.t('s302_d001_g'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '302001',
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
          name: '302-2',
          label: this.$lang.t('s302_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-302002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      label: this.$lang.t('s302_d002_a'),
                      type: 'component',
                      component: 'app-t302d002a'
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
                            name: 'd002_a_upstream',
                            label: this.$lang.t('s302_d002_a_upstream'),
                            type: 'text',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_downstream',
                            label: this.$lang.t('s302_d002_a_downstream'),
                            type: 'text',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_total',
                            label: this.$lang.t('s302_d002_a_total'),
                            type: 'text',
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
                name: 'd002_b',
                height: '100px',
                label: this.$lang.t('s302_d002_b'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 'd002_c',
                height: '100px',
                label: this.$lang.t('s302_d002_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '302002',
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
          name: '302-3',
          label: this.$lang.t('s302_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-302003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s302_d003_a_b'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s302_d003_c'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s302_d003_d'),
                labelDir: 'right',
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s302_d003_c_fuel'),
                      name: 'd003_c_fuel',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d003_c_electricity'),
                      name: 'd003_c_electricity',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d003_c_heating'),
                      name: 'd003_c_heating',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d003_c_cooling'),
                      name: 'd003_c_cooling',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d003_c_steam'),
                      name: 'd003_c_steam',
                      type: 'checkbox'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t302d003abd'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '302003',
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
          name: '302-4',
          label: this.$lang.t('s302_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-302004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s302_d004_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t302d004a'
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
                            name: 'd004_a_total',
                            label: this.$lang.t('s302_d004_a_total'),
                            type: 'text',
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
                label: this.$lang.t('s302_d004_b'),
                labelDir: 'right',
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s302_d004_b_fuel'),
                      name: 'd004_b_fuel',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d004_b_electricity'),
                      name: 'd004_b_electricity',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d004_b_heating'),
                      name: 'd004_b_heating',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d004_b_cooling'),
                      name: 'd004_b_cooling',
                      type: 'checkbox'
                    },
                    {
                      label: this.$lang.t('s302_d004_b_steam'),
                      name: 'd004_b_steam',
                      type: 'checkbox'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_c',
                label: this.$lang.t('s302_d004_c'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd005_d',
                label: this.$lang.t('s302_d004_d'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '302004',
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
          name: '302-5',
          label: this.$lang.t('s302_d005'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-302005',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s302_d005_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t302d005a'
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
                            name: 'd005_a_total',
                            label: this.$lang.t('s302_d005_a_total'),
                            type: 'text',
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
                name: 'd005_b',
                label: this.$lang.t('s302_d005_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd005_c',
                label: this.$lang.t('s302_d005_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d005_docu_gid')
            ],
            [
              {
                name: '302005',
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
  .site-300302001 {
    /deep/ .body {
      form {
        [data-name="d001_cd_table"] {
          .fieldset-body {
            border: 1px solid #CFDDDF;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(repeat-fill, minmax(30px, auto));
            gap: 0;
            margin: 0 0 0 15px;
            padding: 0;
            width: calc(100% - 15px);

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
  }
</style>
