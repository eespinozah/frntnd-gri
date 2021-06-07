<template>
  <Disclosure
    class="site-400416001"
    :digrId="digrId"
    :rows="rows"
    :title="'S400416001' | t"
    @form="setForm($event)"
    @fetch="onSaveEnterFetch"
    @saveenter="onSaveEnterFetch"
    @assigments="assigments=$event"
  ></Disclosure>
</template>

<script>
import standard from '../mixins/Standard';

export default {
  name: 'app-400416001',
  mixins: [standard],
  props: {
    digrId: {
      type: Number,
      default: 400416001
    }
  },
  created() {
    this.rows = [
      this.get001(),
      this.get002(),
    ];
  },
  methods: {
    onSaveEnterFetch([orga_id, year]) { },
    get001() {
      return [
        {
          name: '416-1',
          label: this.$lang.t('s416_d001'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-416001',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                height: '100px',
                label: this.$lang.t('s416_d001_a'),
                name: 'd001_a',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
            [
              {
                name: '416001',
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
          name: '416-1',
          label: this.$lang.t('s416_d002'),
          type: 'fieldset',
          withCard: true,
          component: 'app-status-icon',
          rows: [
            [
              {
                name: 'topic-416002',
                height: '32px',
                type: 'component',
                component: 'app-material-topic',
                disableBorder: true
              }
            ],
            [
              {
                name: 'd002_a_table',
                type: 'fieldset',
                labelDir: 'left',
                rows: [
                  [
                    {
                      label: this.$lang.t('Clase de casos'),
                      type: 'label'
                    },
                    {
                      label: this.$lang.t('Nº de casos'),
                      type: 'label',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s416_d002_a_i_label'),
                      type: 'label'
                    },
                    {
                      name: 'd002_a_i',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s416_d002_a_ii_label'),
                      type: 'label'
                    },
                    {
                      name: 'd002_a_ii',
                      type: 'number',
                      width: '150px'
                    }
                  ],
                  [
                    {
                      label: this.$lang.t('s416_d002_a_iii_label'),
                      type: 'label'
                    },
                    {
                      name: 'd002_a_iii',
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
                label: this.$lang.t('s416_d002_b'),
                name: 'd002_b',
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: '416002',
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
  .site-400416001 {
    /deep/ .body {
      form {
        [data-name="d002_a_table"] {
          .fieldset-body {
            border: 1px solid #CFDDDF;
            box-sizing: border-box;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(repeat-fill, minmax(30px, auto));
            gap: 0;
            margin: 0;
            padding: 0;
            width: 100%;

            .form-row {
              align-items: center;
              border-bottom: 1px solid rgba(200, 200, 200, 0.4);
              display: grid;
              grid-template-columns: 1fr 174px;
              grid-template-rows: 1fr;
              margin-top: 0 !important;

              &:first-child {
                background-color: var(--color-table-header);

                .form-cell {
                  min-height: 30px;

                  label {
                    span {
                      color: #2c3e50;
                    }
                  }

                  &::after {
                    height: calc(100% - 10px);
                    top: 5px;
                  }
                }

              }

              .form-cell {
                align-items: center;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                padding: 0 12px;
                position: relative;
                margin: 0;
                min-height: 50px;

                label {
                  justify-content: flex-start;

                  span {
                    color: #8e959c;
                  }
                }

                &:first-child {
                  justify-content: flex-start;
                }

                &:last-child {
                  &::after {
                    display: none;
                  }
                }

                &::after {
                  background-color: rgba(100, 100, 100, 0.1);
                  content: "";
                  display: block;
                  height: calc(100% - 20px);
                  position: absolute;
                  right: 0;
                  top: 10px;
                  width: 1px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
