<template>
    <mr-page class="page-organization">
    <div class="head">
      <app-title>{{ 'Configuration organization' | t }}</app-title>
    </div>
    <div class="body">

      <mr-card
        class="card-1"
        :label="'Organization' | t">
        <Organization></Organization>
      </mr-card>

      <mr-card
        class="card-2"
        :label="'Regions' | t">
        <Region></Region>
      </mr-card>

      <mr-card
        class="card-3"
        :label="'Locations with significant operations' | t">
        <SignificationLocations></SignificationLocations>
      </mr-card>

      <mr-card
        class="card-4"
        :label="'Benefits delivered' | t">
        <Benefit></Benefit>
      </mr-card>

      <mr-card
        class="card-5"
        :label="'Organization materiality' | t">
        <mr-form
          :rows="rows"
          :showButtons="false">
        </mr-form>

        <Materiality :year="year" @select="setMateriality($event)"></Materiality>
        <TopicStandard :materiality="materiality"></TopicStandard>
      </mr-card>
    </div>

  </mr-page>
</template>

<script>
import Region from './components/Region';
import SignificationLocations from './components/SignificationLocations';
import Materiality from './components/Materiality';
import Organization from './components/Organization';
import TopicStandard from './components/TopicStandard';
import Benefit from './components/Benefit';

export default {
  name: 'app-organization',
  components: { Region, SignificationLocations, Materiality, Organization, TopicStandard, Benefit },
  provide() {
    return {
      getOrganizationId: this.getOrganizationId,
      getYear: this.getYear
    };
  },
  computed: {
    orgaId() {
      return parseInt(this.$route.params.orga_id);
    }
  },
  data() {
    return {
      materiality: null,
      year: 0
    };
  },
  created() {
    this.rows = [
      [
        {
          labelDir: 'left',
          type: 'fieldset',
          withPadding: false,
          rows: [
            [
              {
                collection: 'years',
                initialValue: this.year,
                name: 'year',
                label: this.$lang.t('Year'),
                required: true,
                textField: '@id',
                type: 'dropdown',
                valueField: '@id',
                width: '80px',
                immediate: true,
                onChange: (id, text,  rowCollection) => {
                  this.year = id;
                }
              }
            ]
          ]
        }
      ]
    ];
  },
  methods: {
    getOrganizationId() {
      return this.orgaId;
    },
    getYear() {
      return this.year;
    },
    setMateriality(materiality) {
      this.materiality = materiality;
    }
  }
}
</script>

<style lang="scss" scoped>
.page-organization {
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  position: relative;

  /deep/ .tabs {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:
      70px
      1fr;

    .head {
      align-items: center;
      display: flex;
    }

    .body {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows:
        minmax(360px, auto)
        240px
        240px
        240px
        532px;

      gap: 10px;

      .card-5 {
        position: relative;

        /deep/ main {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows:
            225px
            225px;
          gap: 10px;
          padding: 10px;
          position: inherit;

          >form {
            align-items: center;
            background-color: transparent;
            display: flex;
            padding: 0;
            position: absolute;
            top: 5px;
            right: 5px;
            z-index: 99;

            fieldset {
              padding: 0;

              /deep/ .form-row {
                span {
                  color: white;
                  text-transform: uppercase;
                }
              }
            }
          }

          .table {
            border: 1px solid var(--color-card-line);
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
