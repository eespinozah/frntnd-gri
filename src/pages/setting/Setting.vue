<template>
  <mr-page class="page-setting">
    <div class="head">
      <app-title>{{'General configuration' | t }}</app-title>
    </div>
    <div class="body">
      <mr-card
        class="card-1"
        :label="'Material topics' | t">
        <MaterialTopics></MaterialTopics>
      </mr-card>

      <mr-card
        class="card-2"
        :label="'Organizations' | t">
        <Organizations></Organizations>
      </mr-card>

      <mr-card
        class="card-3"
        :label="'Products category' | t">
        <ProductCategories></ProductCategories>
      </mr-card>

      <mr-card
        class="card-4"
        :label="'Laboral category' | t">
        <EmploymentCategories></EmploymentCategories>
      </mr-card>

      <mr-card
        class="card-5"
        :label="'Fuel type' | t">
        <FuelTypes></FuelTypes>
      </mr-card>

      <mr-card
        class="card-6"
        :label="'Sewage treatment level' | t">
        <TreatmentLevels></TreatmentLevels>
      </mr-card>
    </div>
  </mr-page>
</template>

<script>
import FuelTypes from './components/FuelTypes';
import EmploymentCategories from './components/EmploymentCategories';
import MaterialTopics from './components/MaterialTopics';
import Organizations from './components/Organizations';
import ProductCategories from './components/ProductCategories';
import TreatmentLevels from './components/TreatmentLevels';

export default {
  name: 'app-setting',
  components: {
    FuelTypes,
    EmploymentCategories,
    MaterialTopics,
    Organizations,
    ProductCategories,
    TreatmentLevels
  }
}
</script>

<style lang="scss" scoped>
.page-setting {
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
      .card-1 {
        height: 240px;
      }

      .card-2 {
        height: 240px;
      }

      .card-3 {
        height: 240px;
      }

      .card-4 {
        height: 240px;
      }

      .card-5 {
        height: 240px;
      }

      .card-6 {
        height: 240px;
      }
    }
  }
}
</style>
