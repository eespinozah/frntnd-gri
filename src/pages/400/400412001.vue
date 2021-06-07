<template>
  <Disclosure
    class="site-400412001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400412001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400412001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400412001
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
          name: '412-1',
          label: this.$lang.t('s412_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-412001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_a',
                label: this.$lang.t('s412_d001_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '412001',
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
          name: '412-2',
          label: this.$lang.t('s412_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-412002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_a',
                label: this.$lang.t('s412_d002_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s412_d002_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '412002',
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
          name: '412-3',
          label: this.$lang.t('s412_d003'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-412003',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_a',
                label: this.$lang.t('s412_d003_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_b',
                label: this.$lang.t('s412_d003_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: '412003',
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
  .site-400412001 { }
</style>
