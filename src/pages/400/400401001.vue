<template>
  <Disclosure
    class="site-400401001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400401001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400401001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400401001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '401-1',
          label: this.$lang.t('s401_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-401001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s401_d001_a'),
                type: 'component',
                component: 'app-t401d001a'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s401_d001_b'),
                type: 'component',
                component: 'app-t401d001b'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '401001',
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
          name: '401-2',
          label: this.$lang.t('s401_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-401002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s401_d002_a'),
                type: 'component',
                component: 'app-t401d002a'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s401_d002_b'),
                type: 'textarea',
                readonly: true
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '401002',
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
          name: '401-3',
          label: this.$lang.t('s401_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-401003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s401_d003_a'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s401_d003_b'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s401_d003_c'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s401_d003_d'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s401_d003_e'),
                type: 'label'
              }
            ],
            [
              {
                name: 'd003_table',
                type: 'fieldset',
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Permiso entregado'),
                      type: 'label'
                    },
                    {
                      label: this.$lang.t('Mujeres'),
                      type: 'label',
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('Hombres'),
                      type: 'label',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_a_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_a_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_a_male',
                      type: 'number',
                      width: '150px'
                    },
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_b_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_b_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_b_male',
                      type: 'number',
                      width: '150px'
                    },
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_c_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_c_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_c_male',
                      type: 'number',
                      width: '150px'
                    },
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_return_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_return_den_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_return_den_male',
                      type: 'number',
                      width: '150px'
                    },
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_d_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_d_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_d_male',
                      type: 'number',
                      width: '150px'
                    },
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_retention_label'),
                      type: 'label'
                    },
                    {
                      name: 'd003_retention_den_female',
                      type: 'number',
                      width: '150px'
                    },
                    {
                      name: 'd003_retention_den_male',
                      type: 'number',
                      width: '150px'
                    },
                  ]
                ]
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s401_d003_return_ratio_male'),
                      type: 'label',
                      width: '220px'
                    },
                    {
                      name: 'return_ratio_male',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('s401_d003_retention_ratio_male'),
                      type: 'label',
                      width: '180px'
                    },
                    {
                      name: 'retention_ratio_male',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s401_d003_return_ratio_female'),
                      type: 'label',
                      width: '220px'
                    },
                    {
                      name: 'return_ratio_female',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      label: this.$lang.t('s401_d003_retention_ratio_female'),
                      type: 'label',
                      width: '180px'
                    },
                    {
                      name: 'retention_ratio_female',
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },

                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '401003',
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
  .site-400401001 {
    /deep/ .body {
      form {
        [data-name="d003_table"] {
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
              grid-template-columns: 1fr 174px 174px;
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
