<template>
  <Disclosure
    class="site-200206001"
    :digrId="digrId"
    :rows="rows"
    :title="'S200206001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _200 from './mixins/200';

export default {
  name: 'app-200206001',
  mixins: [_200],
  props: {
    digrId: {
      type: Number,
      default: 200206001
    }
  },
  created() {
    this.rows = [
      this.get001()
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) {
      this.orga_id = orga_id;
      this.year    = year;
    },
    get001() {
      return [
        {
          name: '206-1',
          label: this.$lang.t('s206_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-206001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                type: 'label',
                label: this.$lang.t('s206_d001_a')
              }
            ],
            [
              {
                height: '200px',
                label: this.$lang.t('s206_d001_b'),
                type: 'component',
                component: 'app-t206d001a'
              }
            ],
            [
              {
                type: 'fieldset',
                labelDir: 'left',
                rows: [
                  [
                    {
                      name: 'd001_a_total',
                      label: this.$lang.t('s206_d001_a_total'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
                    },
                    {
                      name: 'd001_a_completed',
                      label: this.$lang.t('s206_d001_a_completed'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
                    },
                    {
                      name: 'd001_a_pending',
                      label: this.$lang.t('s206_d001_a_pending'),
                      type: 'number',
                      readonly: true,
                      width: '100px'
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
                name: '206001',
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
  }
}
</script>
