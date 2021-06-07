<template>
  <Disclosure
    class="site-400417001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400417001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400417001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400417001
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
          name: '417-1',
          label: this.$lang.t('s417_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-417001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s417_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s417_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s417_d001_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s417_d001_a_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s417_d001_a_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      name: 'd001_a',
                      height: '200px',
                      type: 'textarea'
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
                      name: 'd001_b',
                      label: this.$lang.t('s417_d001_b'),
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
                name: 'd001_b_info',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '417001',
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
          name: '417-2',
          label: this.$lang.t('s417_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-417002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s417_d002_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd002_a_i',
                      label: this.$lang.t('s417_d002_a_i'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd002_a_ii',
                      label: this.$lang.t('s417_d002_a_ii'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd002_a_iii',
                      label: this.$lang.t('s417_d002_a_iii'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s417_d002_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '417002',
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
          name: '417-3',
          label: this.$lang.t('s417_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-417003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s417_d003_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd003_a_i',
                      label: this.$lang.t('s417_d003_a_i'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd003_a_ii',
                      label: this.$lang.t('s417_d003_a_ii'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd003_a_iii',
                      label: this.$lang.t('s417_d003_a_iii'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_b',
                label: this.$lang.t('s417_d003_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '417003',
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
  .site-400417001 { }
</style>
