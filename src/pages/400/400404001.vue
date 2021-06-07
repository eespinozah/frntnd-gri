<template>
  <Disclosure
    class="site-400404001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400404001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400404001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400404001
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
          name: '404-1',
          label: this.$lang.t('s404_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-404001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s404_d001_a'),
                type: 'component',
                component: 'app-t404d001a'
              }
            ],
            [
              {
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_a_avg_female',
                      label: this.$lang.t('s404_d001_a_avg_female'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
                    },
                    {
                      name: 'd001_a_avg_male',
                      label: this.$lang.t('s404_d001_a_avg_male'),
                      type: 'number',
                      readonly: true,
                      width: '150px'
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
                name: '404001',
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
          name: '404-2',
          label: this.$lang.t('s404_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-404002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s404_d002_a'),
                type: 'component',
                component: 'app-t404d002a'
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s404_d002_b'),
                type: 'component',
                component: 'app-t404d002b'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '404002',
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
          name: '404-3',
          label: this.$lang.t('s404_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-404003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s404_d003_a'),
                type: 'component',
                component: 'app-t404d003a'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '404003',
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
  .site-400404001 { }
</style>
