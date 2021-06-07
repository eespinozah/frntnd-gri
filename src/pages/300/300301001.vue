<template>
  <Disclosure
    class="site-300301001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300301001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300301001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300301001
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
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;

      this.calcD002(orga_id, year);
    },
    async calcD002(orga_id, year) {
      this.form.setFieldValue('d002_a_weight_perc', Number(this.form.getFieldValue('d002_a_weight_recycled')) / Number(this.form.getFieldValue('d002_a_weight_total')) * 100);
      this.form.setFieldValue('d002_a_volume_perc', Number(this.form.getFieldValue('d002_a_volume_recycled')) / Number(this.form.getFieldValue('d002_a_volume_total')) * 100);
    },
    get001() {
      return [
        {
          name: '301-1',
          label: this.$lang.t('s301_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-301001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s301_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s301_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s301_d001_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t301d001a'
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
                            name: 'd001_a_weight_unrenewable',
                            label: this.$lang.t('s301_d001_a_weight_unrenewable'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd001_a_weight_renewable',
                            label: this.$lang.t('s301_d001_a_weight_renewable'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd001_a_volume_unrenewable',
                            label: this.$lang.t('s301_d001_a_volume_unrenewable'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd001_a_volume_renewable',
                            label: this.$lang.t('s301_d001_a_volume_renewable'),
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
                      name: 'd001_a_info1',
                      label: this.$lang.t('s301_d001_a_info1'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a_info2',
                      label: this.$lang.t('s301_d001_a_info2'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '301001',
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
          name: '301-2',
          label: this.$lang.t('s301_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-301002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s301_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t301d002a'
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
                            name: 'd002_a_weight_total',
                            label: this.$lang.t('s301_d002_a_weight_total'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_weight_recycled',
                            label: this.$lang.t('s301_d002_a_weight_recycled'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_weight_perc',
                            label: this.$lang.t('s301_d002_a_weight_perc'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd002_a_volume_total',
                            label: this.$lang.t('s301_d002_a_volume_total'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_volume_recycled',
                            label: this.$lang.t('s301_d002_a_volume_recycled'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd002_a_volume_perc',
                            label: this.$lang.t('s301_d002_a_volume_perc'),
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
                      name: 'd002_a_info',
                      label: this.$lang.t('s301_d002_a_info'),
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
                name: '301002',
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
          name: '301-3',
          label: this.$lang.t('s301_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-301003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s301_d003_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t301d003a'
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
                            name: 'd003_a_reclaimed',
                            label: this.$lang.t('s301_d003_a_reclaimed'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd003_a_sold',
                            label: this.$lang.t('s301_d003_a_sold'),
                            type: 'number',
                            readonly: true,
                            width: '150px'
                          },
                          {
                            name: 'd003_a_percentage',
                            label: this.$lang.t('s301_d003_a_perc'),
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
                name: 'd003_b',
                label: this.$lang.t('s301_d003_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '301003',
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
</style>
