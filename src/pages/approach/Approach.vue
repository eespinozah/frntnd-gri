<template>
  <mr-page class="approach">
    <div class="head">
      <app-title :showLink="false">
        {{ 'S103_2016' | t }}
      </app-title>
    </div>
    <div class="subhead">
      <div class="title">
        <span>Tema Material</span>
      </div>
      <div class="value">
        <span>{{ materialTopic }}</span>
      </div>
      <div class="title">
        <span>Organización</span>
      </div>
      <div class="value">
        <span>{{ organization }}</span>
      </div>
      <div class="title">
        <span>Año</span>
      </div>
      <div class="value">
        <span>{{ year }}</span>
      </div>
    </div>
    <div class="body">
      <div class="table-topic">
        <TopicStandard @show="showTopicStandard=$event"></TopicStandard>
      </div>
      <mr-form
        ref="form"
        :autoLoad="false"
        :collection="_collection"
        :collectionId="orga_id"
        :disable="disableForm"
        :floatButtons="true"
        parentCollection="years"
        :parentCollectionId="year"
        :rows="rows"
        :usePut="true"
        @save="save"
        @saveenter="onSaveEnter"
        :beforeUpdate="beforeUpdate"
        :afterFetch="afterFetch"
      ></mr-form>
    </div>
  </mr-page>
</template>

<script>
import status from '@data/statusApproach';
import TopicStandard from './components/TopicStandard';
import Files from '@/mixins/Files';

export default {
  name: 'app-approach',
  mixins: [Files],
  components: { TopicStandard },
  props: {
    collection: {
      type: String,
      default: ``
    },
    digrId: {
      type: Number,
      default: 103001001
    }
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(query) {
        this.orga_id = 0;
        this.year    = 0;
        this.mato_id = 0;

        if (query.hasOwnProperty('orga_id')) {
          this.orga_id = Number(query.orga_id);
        }

        if (query.hasOwnProperty('year')) {
          this.year = Number(query.year);
        }

        if (query.hasOwnProperty('mato_id')) {
          this.mato_id = Number(query.mato_id);
        }

        if (this.orga_id && this.year && this.mato_id) {
          const params = new Map();
          params.set('orga_id', this.orga_id);
          params.set('year',    this.year);
          params.set('mato_id', this.mato_id);

          // this.rows = this.getRows();



          this.$nextTick(async () => {
            await this.form.fetch(`${this.orga_id}?mato_id=${this.mato_id}`);
            this.form.setCollectionId(this.orga_id);
            this.SDG.setValue(this.form.rowCollection._data);
            this.data = this.form.rowCollection._data;

            this.disableForm = false;

            this.$forceUpdate();
          });
        }
      }
    },
    showTopicStandard: {
      immediate: false,
      handler(show) {
        this.rows = this.getRows();
        this.$nextTick(() =>
          this.SDG = this.form.getField('103004INFO')
        );
      }
    }
  },
  data() {
    return {
      orga_id: 0,
      rows: [],
      year: 0,
      mato_id: 0,
      SDG: null,
      showTopicStandard: false,
      disableForm: true,
      data: null
    };
  },
  provide() {
    return {
      getAssigments: this.getAssigments,
      getDigrId: this.getDigrId,
      getOrganizationId: this.getOrganizationId,
      getYear: this.getYear,
      getMaterialityId: this.getMaterialityId
    };
  },
  computed: {
    _collection() {
      return this.collection || `t${this.digrId}`;
    },
    form() {
      return this.$refs.form;
    },
    materialTopic() {
      return this.data?.material_topic?.name;
    },
    organization() {
      return this.data?.organization?.name;
    }
  },
  created() {
    this.rows = this.getRows();
  },
  mounted() {
    this.$nextTick(() =>
      this.SDG = this.form.getField('103004INFO')
    );
  },
  methods: {
    afterFetch(dataCollection) {
      const rows = dataCollection.getRows();

      rows.forEach(r => {

        if (r.getValue('finished') === null) {
          r.setValue('finished', false);
        }

      });

      const data = Object.entries(dataCollection.getRows()[0].getData()).map(d => ({}));

      return dataCollection;
    },
    getRows() {
      const row = [];

      !this.showTopicStandard && row.push(this.get000());

      return [
        this.get001(),
        ...row,
        this.get002(),
        this.get003(),
        this.get004(),
        this.get005(),
        this.get006(),
      ];
    },
    async onSaveEnter(e) {
      await this.form.save();
    },
    save() {
    },
    async beforeUpdate(values, next) {
      this.SDG.getValue().forEach(sdg => values.set(sdg.name, sdg.selected));
      return await next(values);
    },
    getAssigments() {
      return this.assigments;
    },
    getDigrId() {
      return this.digrId;
    },
    getOrganizationId() {
      return this.orga_id;
    },
    getYear() {
      return this.year;
    },
    getMaterialityId() {
      return this.mato_id;
    },
    get000() {
      return [
        {
          name: '103-0',
          label: this.$lang.t('s103_d000'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                height: '100px',
                name: 'explanation',
                label: this.$lang.t('s103_explanation'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('explanation_docu_gid')
            ],
          ]
        }
      ];
    },
    get001() {
      return [
        {
          name: 'mato_id',
          initialValue: this.mato_id,
          type: 'hidden'
        }
      ];
    },
    get002() {
      return [
        {
          name: '103-1',
          label: this.$lang.t('s103_d001'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                height: '100px',
                name: 'd001_a',
                label: this.$lang.t('s103_d001_a'),
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s103_d001_b'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd001_b_i',
                      label: this.$lang.t('s103_d001_b_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd001_b_ii',
                      label: this.$lang.t('s103_d001_b_ii'),
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
                label: this.$lang.t('s103_d001_c'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_definition',
                label: this.$lang.t('s103_d001_definition'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_scope',
                label: this.$lang.t('s103_d001_scope'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd001_stakeholders',
                label: this.$lang.t('s103_d001_stakeholders'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d001_docu_gid')
            ],
          ]
        }
      ];
    },
    get003() {
      return [
        {
          name: '103-2',
          label: this.$lang.t('s103_d002'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                label: this.$lang.t('s103_d002_info'),
                type: 'label'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_a',
                label: this.$lang.t('s103_d002_a'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd002_b',
                label: this.$lang.t('s103_d002_b'),
                type: 'textarea'
              }
            ],
            [
              {
                label: this.$lang.t('s103_d002_c'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd002_c_i',
                      label: this.$lang.t('s103_d002_c_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    this.getFieldFileStorage('d002_c_i_docu_gid')
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_ii',
                      label: this.$lang.t('s103_d002_c_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_iii',
                      label: this.$lang.t('s103_d002_c_iii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    this.getFieldFileStorage('d002_c_iii_docu_gid')
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_iv',
                      label: this.$lang.t('s103_d002_c_iv'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_v',
                      label: this.$lang.t('s103_d002_c_v'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_vi',
                      label: this.$lang.t('s103_d002_c_vi'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd002_c_vii',
                      label: this.$lang.t('s103_d002_c_vii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              this.getFieldFileStorage('d002_docu_gid')
            ],
            [
              {
                name: 'd002_status',
                type: 'fieldset',
                labelDir: 'left',
                withPadding: false,
                rows: [
                  [
                    {
                      label: this.$lang.t('Omitted'),
                      name: 'd002_omitted',
                      type: 'checkbox',
                      width: '200px',
                      onValue: (checked) => {
                        const f1 = this.$refs.form.getField('d002_omre_id');
                        const f2 = this.$refs.form.getField('d002_omission_description');

                        if (!checked) {
                          f1.clear();
                          f2.clear();
                        }
                      }
                    },
                    {
                      type: 'empty',
                      width: '100px'
                    },
                    {
                      name: 'd002_omre_id',
                      label: this.$lang.t('Omission reason'),
                      type: 'dropdown',
                      valueField: '@id',
                      textField: 'name',
                      collection: 'omission-reasons',
                      object: 'd002_ommision_reason',
                      useLocale: true,
                      width: '350px'
                    },
                    {
                      name: 'd002_omission_description',
                      label: this.$lang.t('Omission explanation'),
                      type: 'text'
                    }
                  ]
                ]
              },
            ]
          ]
        }
      ];
    },
    get004() {
      return [
        {
          name: '103-3',
          label: this.$lang.t('s103_d003'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                label: this.$lang.t('s103_d003_info'),
                type: 'label'
              }
            ],
            [
              {
                label: this.$lang.t('s103_d003_a'),
                type: 'fieldset',
                rows: [
                  [
                    {
                      height: '100px',
                      name: 'd003_a_i',
                      label: this.$lang.t('s103_d003_a_i'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_ii',
                      label: this.$lang.t('s103_d003_a_ii'),
                      type: 'textarea'
                    }
                  ],
                  [
                    {
                      height: '100px',
                      name: 'd003_a_iii',
                      label: this.$lang.t('s103_d003_a_iii'),
                      type: 'textarea'
                    }
                  ]
                ]
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_risks',
                label: this.$lang.t('s103_d003_risks'),
                type: 'textarea'
              }
            ],
            [
              {
                height: '100px',
                name: 'd003_motivation',
                label: this.$lang.t('s103_d003_motivation'),
                type: 'textarea'
              }
            ],
            [
              this.getFieldFileStorage('d003_certs_docu_gid', this.$lang.t('s103_d003_info_3'))
            ],
            [
              this.getFieldFileStorage('d003_docu_gid')
            ],
            [
              {
                name: 'd003_status',
                type: 'fieldset',
                labelDir: 'left',
                withPadding: false,
                rows: [
                  [
                    {
                      label: this.$lang.t('Omitted'),
                      name: 'd003_omitted',
                      type: 'checkbox',
                      width: '200px',
                      onValue: (checked) => {
                        const f1 = this.$refs.form.getField('d003_omre_id');
                        const f2 = this.$refs.form.getField('d003_omission_description');

                        if (!checked) {
                          f1.clear();
                          f2.clear();
                        }
                      }
                    },
                    {
                      type: 'empty',
                      width: '100px'
                    },
                    {
                      name: 'd003_omre_id',
                      label: this.$lang.t('Omission reason'),
                      type: 'dropdown',
                      valueField: '@id',
                      textField: 'name',
                      collection: 'omission-reasons',
                      object: 'd003_ommision_reason',
                      useLocale: true,
                      width: '350px'
                    },
                    {
                      name: 'd003_omission_description',
                      label: this.$lang.t('Omission explanation'),
                      type: 'text'
                    }
                  ]
                ]
              },
            ]
          ],
        }
      ];
    },
    get005() {
      return [
        {
          label: this.$lang.t('s103_d004'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                name: '103004INFO',
                label: this.$lang.t('s103_d004_info'),
                type: 'component',
                component: 'app-sdg'
              }
            ]
          ]
        }
      ];
    },
    get006() {
      return [
        {
          label: this.$lang.t('s103_d005'),
          type: 'fieldset',
          withCard: true,
          rows: [
            [
              {
                name: 'finished',
                type: 'radiogroup',
                valueField: '@id',
                textField: 'name',
                localCollection: true,
                localData: this.withOmitted ? status : status.filter(s => s.name !== 'Omitted'),
                useLocale: true
              }
            ]
          ]
        }
      ];
    },
  }
}
</script>

<style lang="scss" scoped>
.page {
  box-sizing: border-box;
  flex: 0 1 auto;
  height: 100%;
  padding: 20px;

  /deep/ .tabs {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:
      50px
      50px
      1fr;
    gap: 10px;

    .head {
      box-sizing: border-box;

      .approach-head {
        box-sizing: border-box;

        form {
          margin: 0;
        }
      }
    }

    .subhead {
      border: 1px solid rgba(200, 200, 200, 0.8);
      display: flex;
      flex-direction: row;

      .title {
        align-items: center;
        background-color: #f3f3f3;
        color: #2c3e50;
        display: flex;
        font-size: 14px;
        font-weight: bold;
        justify-content: center;
        padding: 0 40px;
      }

      .value {
        align-items: center;
        color: #8e959c;
        display: flex;
        flex: 1 1 auto;
        font-size: 14px;
        justify-content: center;
      }

      >:nth-child(1) {
        border-right: 1px solid rgba(200, 200, 200, 0.8);
      }

      >:nth-child(3) {
        border-left: 1px solid rgba(200, 200, 200, 0.8);
        border-right: 1px solid rgba(200, 200, 200, 0.8);
      }

      >:nth-child(5) {
        border-left: 1px solid rgba(200, 200, 200, 0.8);
        border-right: 1px solid rgba(200, 200, 200, 0.8);
      }

      >:nth-child(6) {
        flex: 0 0 auto;
        width: 100px;
      }
    }

    .body {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      .table-topic {
        border: 1px solid #CFDDDF;
        box-sizing: border-box;
        flex: 0 1 auto;
        height: 200px;
      }

      form {
        padding: 0;

        >.form-row:nth-child(1) {
          display: none;
        }
      }

      [data-name="103004INFO"] {
        border: none !important;
        height: inherit !important;
        min-height: 200px;
      }

      [data-name="103001"],
      [data-name="103002"],
      [data-name="103003"] {
        &.container {
          border: none !important;
          height: 35px !important;
          z-index: 99;
        }
      }

      [data-name="d002_status"],
      [data-name="d003_status"] {
        span {
          white-space: nowrap;
        }
      }

      div[name="d002_omitted"],
      div[name="d003_omitted"] {
        margin-right: 25px;
      }

      [name="d002_omitted"] label,
      [name="d003_omitted"] label {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
