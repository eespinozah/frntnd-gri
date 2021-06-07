<template>
  <Disclosure
    class="site-300304001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300304001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300304001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300304001
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
      this.get004()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '304-1',
          label: this.$lang.t('s304_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-304001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
               {
                 height: '200px',
                 label: this.$lang.t('s304_d001_a'),
                 type: 'component',
                 component: 'app-t304d001a'
               }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '304001',
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
          name: '304-2',
          label: this.$lang.t('s304_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-304002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s304_d002_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s304_d002_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_a_v'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_a_vi'),
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
                label: this.$lang.t('s304_d002_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s304_d002_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_b_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s304_d002_b_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_b',
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
                name: '304002',
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
          name: '304-3',
          label: this.$lang.t('s304_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-304003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s304_d003_a'),
                type: 'label'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s304_d003_c'),
                type: 'component',
                component: 'app-t304d003ac'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_b',
                label: this.$lang.t('s304_d003_b'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_d',
                label: this.$lang.t('s304_d003_d'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '304003',
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
          name: '304-4',
          label: this.$lang.t('s304_d004'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-304004',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s304_d004_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t304d004a'
                    }
                  ],
                  [
                    {
                      name: 'd004_a_i',
                      label: this.$lang.t('s304_d004_a_i'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      name: 'd004_a_ii',
                      label: this.$lang.t('s304_d004_a_ii'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      name: 'd004_a_iii',
                      label: this.$lang.t('s304_d004_a_iii'),
                      type: 'number',
                      width: '200px'
                    }
                  ],
                  [
                    {
                      name: 'd004_a_iv',
                      label: this.$lang.t('s304_d004_a_iv'),
                      type: 'number',
                      width: '200px'
                    },
                    {
                      name: 'd004_a_v',
                      label: this.$lang.t('s304_d004_a_v'),
                      type: 'number',
                      width: '200px'
                    }
                  ],
                  [
                    {
                      name: 'd004_a_total',
                      label: this.$lang.t('s304_d004_a_total'),
                      type: 'number',
                      readonly: true,
                      width: '200px'
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
                name: '304004',
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
  .site-300304001 {

  }
</style>
