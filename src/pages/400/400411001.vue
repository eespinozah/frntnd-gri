<template>
  <Disclosure
    class="site-400411001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400411001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400411001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400411001
    }
  },
  created() {
    this.rows = [
      this.get001()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '411-1',
          label: this.$lang.t('s411_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-411001',
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
                      height: '100px',
                      name: 'd001_a',
                      label: this.$lang.t('s411_d001_a'),
                      readonly: true,
                      type: 'number',
                      width: '150px'
                    }
                  ],
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s411_d001_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s411_d001_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s411_d001_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s411_d001_b_iii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s411_d001_b_iv'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '200px',
                      name: 'd001_b',
                      type: 'component',
                      component: 'app-t411d001b'
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
                name: '411001',
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
  .site-400411001 { }
</style>
