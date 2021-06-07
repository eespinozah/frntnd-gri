<template>
  <mr-page class="disclosure">
    <div class="head">
      <app-head
        :showMySections="false"
        :orga_id="orga_id"
        :year="year"
        :title="title"
        :showLink="true"
        :digrId="digrId"
        @significant_location_definition="$emit('significant_location_definition', $event)"
        @find="onFind($event)"></app-head>
    </div>
    <div class="body">
      <mr-form
        ref="form"
        :autoLoad="false"
        :collection="_collection"
        :collectionId="orga_id"
        :floatButtons="true"
        parentCollection="years"
        :parentCollectionId="year"
        :rows="rows"
        :usePut="true"
        @save="save"
        @saveenter="onSaveEnter"
      ></mr-form>

      <mr-card-tab :active="0">
        <app-comments ref="comments"></app-comments>
        <app-logs ref="logs"></app-logs>
      </mr-card-tab>
    </div>
  </mr-page>
</template>

<script>
import DisclosureAssigments from '@services/disclosure-assigments';

export default {
  name: 'app-disclosure',
  props: {
    collection: {
      type: String,
      default: ``
    },
    rows: {
      type: Array,
      default: []
    },
    digrId: {
      type: Number,
      default: 0
    },
    title: String
  },
  provide() {
    return {
      disclosure: this,
      getAssigments: this.getAssigments,
      getOrganizationId: this.getOrganizationId,
      getYear: this.getYear,
      getDigrId: this.getDigrId,
      getChange: this.getChange
    };
  },
  computed: {
    _collection() {
      return this.collection || `t${this.digrId}`;
    },
    form() {
      return this.$refs.form;
    },
    comments() {
      return this.$refs.comments;
    },
    logs() {
      return this.$refs.logs;
    }
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(query) {
        this.orga_id = 0;
        this.year    = 0;
        this.disclosure = null;

        if (query.hasOwnProperty('orga_id')) {
          this.orga_id = Number(query.orga_id);
          this.$emit('orga_id', this.orga_id);
        }

        if (query.hasOwnProperty('year')) {
          this.year = Number(query.year);
          this.$emit('year', this.year);
        }

        if (query.hasOwnProperty('disclosure')) {
          this.disclosure = query.disclosure;
        }

        if (this.orga_id && this.year) {
          this.$nextTick(() => {
            this.change = +new Date();
            this.$emit('change', [this.orga_id, this.year]);
            this.refresh();
          });
        }
      }
    }
  },
  data() {
    return {
      assigments: null,
      change: null,
      disclosureAssigments: null,
      disclosure: null,
      orga_id: 0,
      year: 0,
    };
  },
  created() {
    this.disclosureAssigments = new DisclosureAssigments(this, this.digrId);
  },
  mounted() {
    this.$nextTick(() => {
      const form = this.form.$el;

      let card = this.disclosure ? form.querySelector(`[data-name="${this.disclosure}"]`)
                                 : null;

      if (!card) {
        card = form.querySelector('fieldset');
      }

      card.scrollIntoView({ block: 'start' })

      const icons = Array.from(form.querySelectorAll('.status')).map(status => status.__vue__);

      icons.forEach(icon => {
        icon.$on('assigment', assigment => {
          const row = assigment.getFirstRowCollection();
          const index = this.assigments.getRows().findIndex((el) => el.getId() === row.getId());

          if (index >= 0) {
            this.assigments._rows[index] = row;
            this.assigments.__ob__.dep.notify();
          }
        });
      });

      this.$emit('form', this.form);
    });
  },
  methods: {
    getAssigments() {
      return this.assigments;
    },
    getDigrId() {
      return this.digrId;
    },
    getChange() {
      return this.change;
    },
    getOrganizationId() {
      return this.orga_id;
    },
    getYear() {
      return this.year;
    },
    async refresh() {
      this.form.fetch();

      this.assigments = await this.disclosureAssigments.fetch(this.orga_id, this.year);
      this.$emit('assigments', this.assigments);

       this.refreshComments();

       this.$emit('fetch', [this.orga_id, this.year]);
    },
    onFind(params) {
      if (params.has('significant_location_definition')) {
        this.$emit('significant_location_definition', params.get('significant_location_definition'));
      }

      this.$router.push({ path: this.$router.currentRoute.path, query: { ...this.$route.query, ...Object.fromEntries(params), time: +new Date() }})
    },
    async onSaveEnter(e) {
      await this.form.save();
    },
    save(collection) {
      this.form.setValues(collection);

      this.refreshComments();
      this.$emit('saveenter', [this.orga_id, this.year]);
    },
    refreshComments() {
      this.comments.refresh();
      this.logs.refresh();
    },
  }
}
</script>

<style lang="scss" scoped>
  .page {
    box-sizing: border-box;
    flex: 0 1 auto;
    height: 100%;
    padding: 0;

    /deep/ .tabs {
      .head {
        height: 70px;

        .disclosure-head {
          box-sizing: border-box;
          padding: 20px;

          form {
            margin: 0;
          }
        }
      }

      .body {
        box-sizing: border-box;
        height: calc(100% - 70px);
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 20px 20px 20px;
        width: 100%;

        .app-logs {
          margin-top: 20px;
        }

        >form {
          padding: 0;
          margin: 0 0 20px 0;

          .fieldsetfield.with-card {
            >.fieldset-body {
              margin-bottom: 8px;
            }
          }
        }

        [data-name="102001"],
        [data-name="102002"],
        [data-name="102003"],
        [data-name="102004"],
        [data-name="102005"],
        [data-name="102006"],
        [data-name="102007"],
        [data-name="102008"],
        [data-name="102009"],
        [data-name="102010"],
        [data-name="102011"],
        [data-name="102012"],
        [data-name="102013"],
        [data-name="102014"],
        [data-name="102015"],
        [data-name="102016"],
        [data-name="102017"],
        [data-name="102018"],
        [data-name="102019"],
        [data-name="102020"],
        [data-name="102021"],
        [data-name="102022"],
        [data-name="102023"],
        [data-name="102024"],
        [data-name="102025"],
        [data-name="102026"],
        [data-name="102027"],
        [data-name="102028"],
        [data-name="102029"],
        [data-name="102030"],
        [data-name="102031"],
        [data-name="102032"],
        [data-name="102033"],
        [data-name="102034"],
        [data-name="102035"],
        [data-name="102036"],
        [data-name="102037"],
        [data-name="102038"],
        [data-name="102039"],
        [data-name="102040"],
        [data-name="102041"],
        [data-name="102042"],
        [data-name="102043"],
        [data-name="102044"],
        [data-name="102045"],
        [data-name="102046"],
        [data-name="102047"],
        [data-name="102048"],
        [data-name="102049"],
        [data-name="102050"],
        [data-name="102051"],
        [data-name="102052"],
        [data-name="102053"],
        [data-name="102054"],
        [data-name="102055"],
        [data-name="102056"],
        [data-name="201001"],
        [data-name="201002"],
        [data-name="201003"],
        [data-name="201004"],
        [data-name="202001"],
        [data-name="202002"],
        [data-name="203001"],
        [data-name="203002"],
        [data-name="204001"],
        [data-name="205001"],
        [data-name="205002"],
        [data-name="205003"],
        [data-name="206001"],
        [data-name="207001"],
        [data-name="207002"],
        [data-name="207003"],
        [data-name="207004"],
        [data-name="301001"],
        [data-name="301002"],
        [data-name="301003"],
        [data-name="302001"],
        [data-name="302002"],
        [data-name="302003"],
        [data-name="302004"],
        [data-name="302005"],
        [data-name="303001"],
        [data-name="303002"],
        [data-name="303003"],
        [data-name="303004"],
        [data-name="303005"],
        [data-name="304001"],
        [data-name="304002"],
        [data-name="304003"],
        [data-name="304004"],
        [data-name="305001"],
        [data-name="305002"],
        [data-name="305003"],
        [data-name="305004"],
        [data-name="305005"],
        [data-name="305006"],
        [data-name="305007"],
        [data-name="306001"],
        [data-name="306002"],
        [data-name="306003"],
        [data-name="306004"],
        [data-name="306005"],
        [data-name="307001"],
        [data-name="308001"],
        [data-name="308002"],
        [data-name="401001"],
        [data-name="401002"],
        [data-name="401003"],
        [data-name="402001"],
        [data-name="403001"],
        [data-name="403002"],
        [data-name="403003"],
        [data-name="403004"],
        [data-name="403005"],
        [data-name="403006"],
        [data-name="403007"],
        [data-name="403008"],
        [data-name="403009"],
        [data-name="403010"],
        [data-name="404001"],
        [data-name="404002"],
        [data-name="404003"],
        [data-name="405001"],
        [data-name="405002"],
        [data-name="406001"],
        [data-name="407001"],
        [data-name="408001"],
        [data-name="409001"],
        [data-name="410001"],
        [data-name="411001"],
        [data-name="412001"],
        [data-name="412002"],
        [data-name="412003"],
        [data-name="413001"],
        [data-name="413002"],
        [data-name="414001"],
        [data-name="414002"],
        [data-name="415001"],
        [data-name="416001"],
        [data-name="416002"],
        [data-name="417001"],
        [data-name="417002"],
        [data-name="417003"],
        [data-name="418001"],
        [data-name="419001"]
        {
          &.container {
            border: none !important;
            height: 35px !important;
            z-index: 99;
          }
        }
      }
    }
  }

</style>
