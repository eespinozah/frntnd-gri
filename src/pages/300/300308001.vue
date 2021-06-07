<template>
  <Disclosure
    class="site-300308001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300308001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300308001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300308001
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
      this.get002()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '308-1',
          label: this.$lang.t('s308_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-308001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s308_d001_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_a_new',
                      label: this.$lang.t('s308_d001_a_new'),
                      type: 'number',
                      width: '50px'
                    },
                    {
                      name: 'd001_a_screened',
                      label: this.$lang.t('s308_d001_a_screened'),
                      type: 'number',
                      width: '50px'
                    },
                    {
                      name: 'd001_a_perc',
                      label: this.$lang.t('s308_d001_a_perc'),
                      type: 'number',
                      readonly: true,
                      width: '50px'
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
                name: '308001',
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
          name: '308-2',
          label: this.$lang.t('s308_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-308002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
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
                      name: 'd002_total',
                      label: this.$lang.t('s308_d002_total'),
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd002_a',
                      label: this.$lang.t('s308_d002_a'),
                      type: 'number',
                      width: '100px'
                    }
                  ],
                  [
                    {
                      name: 'd002_b_potential',
                      label: this.$lang.t('s308_d002_b_potential'),
                      type: 'number',
                      width: '50px'
                    },
                    {
                      name: 'd002_b_actual',
                      label: this.$lang.t('s308_d002_b_actual'),
                      type: 'number',
                      width: '50px'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_c',
                label: this.$lang.t('s308_d002_c'),
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s308_d002_d'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd002_d',
                      label: this.$lang.t('s308_d002_d_i'),
                      type: 'number',
                      width: '100px'
                    },
                    {
                      name: 'd002_d_perc',
                      label: this.$lang.t('s308_d002_d_ii'),
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
                label: this.$lang.t('s308_d002_e'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd002_e',
                      label: this.$lang.t('s308_d002_e_i'),
                      type: 'number',
                      width: '100px'
                    },
                    {
                      name: 'd002_e_perc',
                      label: this.$lang.t('s308_d002_e_ii'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_e_why',
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
                name: '308002',
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
  .site-300308001 { }
</style>
