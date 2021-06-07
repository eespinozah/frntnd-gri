<template>
  <div class="table-t303d004c2">
    <table v-if="data">
      <thead>
        <tr>
          <th>{{ 'Water discharge' | t }}</th>
          <th>{{ 'All areas' | t }}</th>
          <th>{{ 'Areas with water stress' | t }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ 'Surface water' | t }}</td>
          <td>{{ data.surface }}</td>
          <td class="empty">&nbsp;</td>
        </tr>
        <tr>
          <td>{{ 'Groundwater' | t }}</td>
          <td>{{ data.ground }}</td>
          <td class="empty">&nbsp;</td>
        </tr>
        <tr>
          <td>{{ 'Seawater' | t }}</td>
          <td>{{ data.sea }}</td>
          <td class="empty">&nbsp;</td>
        </tr>
        <tr>
          <td>{{ 'Third-party water (total)' | t }}</td>
          <td>{{ data.third_party }}</td>
          <td class="empty">&nbsp;</td>
        </tr>
        <tr>
          <td class="indented">{{ 'Third-party water sent for use to other organizations' | t }}</td>
          <td>{{ data.third_party_sent }}</td>
          <td class="empty">&nbsp;</td>
        </tr>
        <tr>
          <td>{{ 'Total water discharge' | t }}</td>
          <td>{{ data.total_all }}</td>
          <td>{{ data.total_stress }}</td>
        </tr>
        <tr>
          <td class="indented">{{ 'Freshwater (≤1,000 mg/L Total Dissolved Solids)' | t }}</td>
          <td>{{ data.fresh_all }}</td>
          <td>{{ data.fresh_stress }}</td>
        </tr>
        <tr>
          <td class="indented">{{ 'Other water (>1,000 mg/L Total Dissolved Solids)' | t }}</td>
          <td>{{ data.other_all }}</td>
          <td>{{ data.other_stress }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Calc from '@services/calc-v2';

export default {
  name: 'app-t303d004c2',
  props: {

  },
  data() {
    return {
      calc: new Calc(this, 't300303001', 'd4-c'),
      data: null
    }
  },
  methods: {
    async setValue([orga_id, year]) {

      try {
        const dataCollection = await this.calc.fetch(orga_id, year);
        const rowCollection  = dataCollection.getFirstRowCollection();

        this.data = rowCollection.getData();
      } catch(e) {
        if ([403, 422].indexOf(e.code) === -1) {
          this.$snack.error(e.message);
        } else {
          this.$snack.warning(e.message);
        }
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .table-t303d004c2 {
    box-sizing: border-box;
    height: 100%;

    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;

      thead {
        background-color: var(--color-table-header);
        border-bottom: 1px solid rgba(200, 200, 200, 0.8);
        color: var(--color-table-header-font);

        tr {
          th {
            font-size: 14px;
            font-weight: normal;
            height: 30px;
            text-align: left;
            padding-left: 12px;

            &:nth-child(2) {
              width: 150px;
            }

            &:nth-child(3) {
              width: 160px;
            }
          }
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid rgba(200, 200, 200, 0.4);

          &:last-child {
            border-bottom: none;
          }

          td {
            color: #8e959c;
            font-size: 14px;
            font-weight: normal;
            height: 30px;
            padding-left: 12px;
            position: relative;

            &.indented {
              padding-left: 36px;
            }

            &.empty {
              background-color: rgba(185, 185, 185, 0.1);

              &::after {
                content: none !important;
              }
            }

            &.empty-sibling {
              &::after {
                content: none !important;
              }
            }

            &:not(:first-child) {
              &::after {
                background-color: rgba(100, 100, 100, 0.1);
                content: "";
                display: block;
                height: 20px;
                position: absolute;
                left: 0;
                top: 5px;
                width: 1px;
              }
            }

          }
        }
      }
    }
  }
</style>
