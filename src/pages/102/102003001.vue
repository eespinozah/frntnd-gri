<template>
  <Disclosure
    class="site-102003001"
    :digrId="digrId"
    :rows="rows"
    :title="'S102003001' | t"
    @form="setForm($event)"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import _102 from './mixins/102';

export default {
  name: 'app-102003001',
  mixins: [_102],
  props: {
    digrId: {
      type: Number,
      default: 102003001
    }
  },
  created() {
    this.rows = [
      this.get016(),
      this.get017()
    ];
  },
  methods: {
    get016() {
      return [
        {
          name: '102-16',
          label: this.$lang.t('s102_d016'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                height: '100px',
                name: 'd016_a',
                label: this.$lang.t('s102_d016_a'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d016_docu_gid')
            ],
            [
              {
                name: '102016',
                height: '30px',
                type: 'component',
                component: 'app-status'
              }
            ]
          ]
        }
      ];
    },
    get017() {
      return [
        {
          name: '102-17',
          label: this.$lang.t('s102_d017'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                label: this.$lang.t('s102_d017_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd017_a_i',
                      label: this.$lang.t('s102_d017_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd017_a_ii',
                      label: this.$lang.t('s102_d017_a_ii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d017_docu_gid')
            ],
            [
              {
                name: '102017',
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
