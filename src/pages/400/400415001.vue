<template>
  <Disclosure
    class="site-400415001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400415001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400415001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400415001
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
          name: '415-1',
          label: this.$lang.t('s415_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-415001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s415_d001_a'),
                name: 'd001_a',
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s415_d001_b'),
                name: 'd001_b',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '415001',
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
  .site-400415001 { }
</style>
