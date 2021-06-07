<template>
  <Disclosure
    class="site-102005001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102005001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';

export default {
  name: 'app-102005001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102005001
    }
  },
  created() {
    this.rows = [
      this.get040(),
      this.get041(),
      this.get042(),
      this.get043(),
      this.get044(),
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;
    },
    get040() {
      return [
        {
          name: '102-40',
          label: this.$lang.t('s102_d040'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd040_a',
                label: this.$lang.t('s102_d040_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '200px',
                type: 'component',
                component: 'app-t102d040a'
              }
            ],
            [
              this.getFieldFileStorage('d040_docu_gid')
            ],
            [
              {
                name: '102040',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get041() {
      return [
        {
          name: '102-41',
          label: this.$lang.t('s102_d041'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                withPadding: false,
                rows: [
                  [
                    {
                      name: 'd041_a_total_covered',
                      label: this.$lang.t('s102_d041_a_total_covered'),
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd041_a',
                      label: this.$lang.t('s102_d041_a_perc'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd041_a_info',
                label: this.$lang.t('s102_d041_a_info'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d041_docu_gid')
            ],
            [
              {
                name: '102041',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get042() {
      return [
        {
          name: '102-42',
          label: this.$lang.t('s102_d042'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd042_a',
                label: this.$lang.t('s102_d042_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d042_docu_gid')
            ],
            [
              {
                name: '102042',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get043() {
      return [
        {
          name: '102-43',
          label: this.$lang.t('s102_d043'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'd043_a',
                height: '100px',
                label: this.$lang.t('s102_d043_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '200px',
                type: 'component',
                component: 'app-t102d043a'
              }
            ],
            [
              this.getFieldFileStorage('d043_docu_gid')
            ],
            [
              {
                name: '102043',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get044() {
      return [
        {
          name: '102-44',
          label: this.$lang.t('s102_d044'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d044_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd044_a_i',
                      label: this.$lang.t('s102_d044_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd044_a_ii',
                      label: this.$lang.t('s102_d044_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    this.getFieldFileStorage('d044_docu_gid')
                  ],
                  [
                    {
                      name: '102044',
                      height: '30px',
                      type: 'component',
                      component: 'app-status'
                    }
                  ]
                ]
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
  /deep/ .tabs {

    form {
      >.form-row {
        &:nth-child(2) {
          .form-row {
            &:nth-child(2) {
              span {
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
</style>
