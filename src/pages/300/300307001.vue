<template>
  <Disclosure
    class="site-300307001"
    :digrId="digrId"
    :rows="rows"
    :title="'S300307001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _300 from './mixins/300';

export default {
  name: 'app-300307001',
  mixins: [_300],
  props: {
    digrId: {
      type: Number,
      default: 300307001
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
      this.get001()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
    },
    get001() {
      return [
        {
          name: '307-1',
          label: this.$lang.t('s307_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-307001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s307_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '200px',
                      type: 'component',
                      component: 'app-t307d001a'
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
                            name: 'd001_a_i',
                            label: this.$lang.t('s307_d001_a_total_monetary'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ],
                        [
                          {
                            name: 'd001_a_ii',
                            label: this.$lang.t('s307_d001_a_number_non_monetary'),
                            type: 'number',
                            readonly: true,
                            width: '200px'
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a_iii',
                      label: this.$lang.t('s307_d001_a_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s307_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '307001',
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
  .site-300307001 { }
</style>
