<template>
  <Disclosure
    class="site-400405001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400405001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400405001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400405001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '405-1',
          label: this.$lang.t('s405_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-405001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s405_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s405_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s405_d001_a_ii'),
                      type: 'label'
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
                            name: 'd001_a_f_g1',
                            label: this.$lang.t('s405_d001_a_f_g1'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd001_a_f_g2',
                            label: this.$lang.t('s405_d001_a_f_g2'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd001_a_f_g3',
                            label: this.$lang.t('s405_d001_a_f_g3'),
                            type: 'number',
                            width: '150px'
                          }
                        ],
                        [
                          {
                            name: 'd001_a_m_g1',
                            label: this.$lang.t('s405_d001_a_m_g1'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd001_a_m_g2',
                            label: this.$lang.t('s405_d001_a_m_g2'),
                            type: 'number',
                            width: '150px'
                          },
                          {
                            name: 'd001_a_m_g3',
                            label: this.$lang.t('s405_d001_a_m_g3'),
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
                      name: 'd001_a_iii',
                      label: this.$lang.t('s405_d001_a_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s405_d001_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s405_d001_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s405_d001_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component:'app-t405d001a'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_b_iii',
                      label: this.$lang.t('s405_d001_b_iii'),
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
                name: '405001',
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
          name: '405-2',
          label: this.$lang.t('s405_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-405002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s405_d002_a'),
                type: 'component',
                component: 'app-significant-locations',
                expanded:'app-t405d002a'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s405_d002_b'),
                type: 'textarea',
                readonly: true
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '405002',
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
  .site-400405001 { }
</style>
