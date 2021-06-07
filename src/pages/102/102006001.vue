<template>
  <Disclosure
    class="site-102006001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102006001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';
import accordance from '@data/accordance';

export default {
  name: 'app-102006001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102006001
    }
  },
  created() {
    this.rows = [
      this.get045(),
      this.get046(),
      this.get047(),
      this.get048(),
      this.get049(),
      this.get050(),
      this.get051(),
      this.get052(),
      this.get053(),
      this.get054(),
      this.get056(),
    ];
  },
  methods: {
    get045() {
      return [
        {
          name: '102-45',
          label: this.$lang.t('s102_d045'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd045_a',
                label: this.$lang.t('s102_d045_a'),
                type: 'label'
              }
            ],
            [
              {
                height: '200px',
                name: 'd046_b',
                label: this.$lang.t('s102_d045_b'),
                type: 'component',
                component: 'app-t102d045ab'
              }
            ],
            [
              this.getFieldFileStorage('d045_docu_gid')
            ],
            [
              {
                name: '102045',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get046() {
      return [
        {
          name: '102-46',
          label: this.$lang.t('s102_d046'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd046_a',
                label: this.$lang.t('s102_d046_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd046_b',
                label: this.$lang.t('s102_d046_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d046_docu_gid')
            ],
            [
              {
                name: '102046',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get047() {
      return [
        {
          name: '102-47',
          label: this.$lang.t('s102_d047'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd047_a',
                label: this.$lang.t('s102_d047_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d047_docu_gid')
            ],
            [
              {
                name: '102047',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get048() {
      return [
        {
          name: '102-48',
          label: this.$lang.t('s102_d048'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd048_a',
                label: this.$lang.t('s102_d048_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d048_docu_gid')
            ],
            [
              {
                name: '102048',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get049() {
      return [
        {
          name: '102-49',
          label: this.$lang.t('s102_d049'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd049_a',
                label: this.$lang.t('s102_d049_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d049_docu_gid')
            ],
            [
              {
                name: '102049',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get050() {
      return [
        {
          name: '102-50',
          label: this.$lang.t('s102_d050'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd050_a',
                label: this.$lang.t('s102_d050_a'),
                type: 'text'
              }
            ],
            [
              {
                name: '102050',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get051() {
      return [
        {
          name: '102-51',
          label: this.$lang.t('s102_d051'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd051_a',
                label: this.$lang.t('s102_d051_a'),
                type: 'date'
              }
            ],
            [
              {
                name: '102051',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get052() {
      return [
        {
          name: '102-52',
          label: this.$lang.t('s102_d052'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd052_a',
                label: this.$lang.t('s102_d052_a'),
                type: 'text'
              }
            ],
            [
              {
                name: '102052',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get053() {
      return [
        {
          name: '102-53',
          label: this.$lang.t('s102_d053'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd053_a',
                label: this.$lang.t('s102_d053_a'),
                type: 'text'
              }
            ],
            [
              {
                name: '102053',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get054() {
      return [
        {
          name: '102-54',
          label: this.$lang.t('s102_d054'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d054_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s102_d054_a_begin'),
                      type: 'label',
                      width: '370px'
                    },
                    {
                      name: 'd054_a',
                      labelList: this.$lang.t('s102_d054_a_i'),
                      type: 'dropdown',
                      valueField: '@id',
                      textField: 'name',
                      useLocale: true,
                      localCollection: true,
                      localData: accordance,
                      width: '100px'
                    },
                    {
                      label: this.$lang.t('s102_d054_a_end'),
                      type: 'label'
                    }
                  ]
                ]
              }
            ],
            [
              {
                name: '102054',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get056() {
      return [
        {
          name: 's102_d056',
          label: this.$lang.t('s102_d056'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd056_a',
                label: this.$lang.t('s102_d056_a'),
                type: 'textarea'
              }
            ],
            [
              {
                name: 's102_d056_b',
                label: this.$lang.t('s102_d056_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd056_b_i',
                      label: this.$lang.t('s102_d056_b_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd056_b_ii',
                      label: this.$lang.t('s102_d056_b_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd056_b_iii',
                      label: this.$lang.t('s102_d056_b_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d056_docu_gid')
            ],
            [
              {
                name: '102056',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
  }
}
</script>
