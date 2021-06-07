<template>
  <Disclosure
    class="site-200207001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200207001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200207001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200207001
    }
  },
  data() {
    return {
    };
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
      this.get003(),
      this.get004(),
    ];
  },
  methods: {
    get001() {
      return [
        {
          name: '207-1',
          label: this.$lang.t('s207_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-207001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s207_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd001_a_i',
                      label: this.$lang.t('s207_d001_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a_ii',
                      label: this.$lang.t('s207_d001_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a_iii',
                      label: this.$lang.t('s207_d001_a_iii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a_iv',
                      label: this.$lang.t('s207_d001_a_iv'),
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
                name: '207001',
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
          name: '207-2',
          label: this.$lang.t('s207_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-207002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s207_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd002_a_i',
                      label: this.$lang.t('s207_d002_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_a_ii',
                      label: this.$lang.t('s207_d002_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_a_iii',
                      label: this.$lang.t('s207_d002_a_iii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_a_iv',
                      label: this.$lang.t('s207_d002_a_iv'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s207_d002_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_c',
                label: this.$lang.t('s207_d002_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '207002',
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
          name: '207-3',
          label: this.$lang.t('s207_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-207003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s207_d003_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd003_a_i',
                      label: this.$lang.t('s207_d003_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_ii',
                      label: this.$lang.t('s207_d003_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_iii',
                      label: this.$lang.t('s207_d003_a_iii'),
                      type: 'textarea'
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
                name: '207003',
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
          name: '207-4',
          label: this.$lang.t('s207_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-207004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd004_a',
                label: this.$lang.t('s207_d004_a'),
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s207_d004_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd004_b_i',
                      label: this.$lang.t('s207_d004_b_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd004_b_ii',
                      label: this.$lang.t('s207_d004_b_ii'),
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
                            name: 'd004_b_iii_total',
                            label: this.$lang.t('s207_d004_b_iii_total'),
                            type: 'number',
                            width: '100px'
                          },
                          {
                            margin: '0 0 0 5px',
                            label: this.$lang.t('s207_d004_b_iii_total_final'),
                            type: 'label',
                            align: 'left'
                          }
                        ],
                        [
                          {
                            height: '100px',
                            name: 'd004_b_iii_basis',
                            type: 'textarea'
                          }
                        ],
                        [
                          {
                            name: 'd004_b_iv',
                            label: this.$lang.t('s207_d004_b_iv'),
                            type: 'number',
                            width: '100px'
                          }
                        ],
                        [
                          {
                            name: 'd004_b_v',
                            label: this.$lang.t('s207_d004_b_v'),
                            type: 'number',
                            width: '100px'
                          }
                        ],
                        [
                          {
                            name: 'd004_b_vi',
                            label: this.$lang.t('s207_d004_b_vi'),
                            type: 'number',
                            width: '100px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd004_b_vii',
                      label: this.$lang.t('s207_d004_b_vii'),
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
                            name: 'd004_b_viii',
                            label: this.$lang.t('s207_d004_b_viii'),
                            type: 'number',
                            width: '100px'
                          }
                        ],
                        [
                          {
                            name: 'd004_b_ix',
                            label: this.$lang.t('s207_d004_b_ix'),
                            type: 'number',
                            width: '100px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd004_b_x',
                      label: this.$lang.t('s207_d004_b_x'),
                      type: 'textarea'
                    }
                  ],
                ]
              }
            ],
            [
              {
                name: 'd004_c',
                label: this.$lang.t('s207_d004_c'),
                type: 'text'
              }
            ],
            [
              this.getFieldFileStorage('d004_docu_gid')
            ],
            [
              {
                name: '207004',
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
