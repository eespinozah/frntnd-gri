<template>
  <Disclosure
    class="site-400418001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400418001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400418001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400418001
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
          name: '418-1',
          label: this.$lang.t('s418_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-418001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                label: this.$lang.t('s418_d001_a'),
                labelDir: 'left',
                type: 'fieldset',
                rows: [
                  [
                    {
                      name: 'd001_a_i',
                      label: this.$lang.t('s418_d001_a_i'),
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      name: 'd001_a_ii',
                      label: this.$lang.t('s418_d001_a_ii'),
                      type: 'number',
                      width: '150px'
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
                      label: this.$lang.t('s418_d001_b'),
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
                label: this.$lang.t('s418_d001_c'),
                name: 'd001_c',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '418001',
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
  .site-400418001 { }
</style>
