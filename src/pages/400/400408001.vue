<template>
  <Disclosure
    class="site-400408001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400408001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400408001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400408001
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
          name: '408-1',
          label: this.$lang.t('s408_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-408001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s408_d001_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s408_d001_a_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s408_d001_a_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_a',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                label: this.$lang.t('s408_d001_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      label: this.$lang.t('s408_d001_b_i'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s408_d001_b_ii'),
                      type: 'label'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_b',
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_c',
                label: this.$lang.t('s408_d001_c'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '408001',
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
  .site-400408001 { }
</style>
