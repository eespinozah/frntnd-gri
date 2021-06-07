<template>
  <Disclosure
    class="site-400410001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400410001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400410001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400410001
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
          name: '410-1',
          label: this.$lang.t('s410_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-410001',
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
                label: this.$lang.t('s410_d001_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_b',
                label: this.$lang.t('s410_d001_b'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '410001',
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
  .site-400410001 { }
</style>
