<template>
  <div class="sdg">
    <div v-for="item of items" :key="item.name"
      class="un_sdg" :class="item.name + ' ' + lang">
      <i class="material-icons-outlined" @click="toggleSelect(item)">
        {{ item.selected  ? 'check_box' : 'check_box_outline_blank' }}
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-sdg',
  data() {
    return {
      lang: '',
      items: [
        { name: 'un_sdg01', selected: false },
        { name: 'un_sdg02', selected: false },
        { name: 'un_sdg03', selected: false },
        { name: 'un_sdg04', selected: false },
        { name: 'un_sdg05', selected: false },
        { name: 'un_sdg06', selected: false },
        { name: 'un_sdg07', selected: false },
        { name: 'un_sdg08', selected: false },
        { name: 'un_sdg09', selected: false },
        { name: 'un_sdg10', selected: false },
        { name: 'un_sdg11', selected: false },
        { name: 'un_sdg12', selected: false },
        { name: 'un_sdg13', selected: false },
        { name: 'un_sdg14', selected: false },
        { name: 'un_sdg15', selected: false },
        { name: 'un_sdg16', selected: false },
        { name: 'un_sdg17', selected: false },
      ],
    };
  },
  created() {
    this.$lang.getLang().subscribe(l => this.lang = l.split('-')[0]);
  },
  methods: {
    toggleSelect(item) {
      item.selected = !item.selected;
    },
    getValue() {
      return this.items;
    },
    setValue(values) {
      this.items.forEach(i => i.selected = values[i.name]);
   }
  }
}
</script>

<style lang="scss" scoped>
.sdg {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 10px;
  height: 100%;
  width: 100%;

  .un_sdg {
    background-size: 96px 96px;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid var(--color-card-line);
    box-sizing: border-box;
    display: block;
    height: 96px;
    position: relative;

    i {
      color: #00ACDD;
      cursor: pointer;
      font-size: 18px;
      position: absolute;
      bottom: 0;
      right: 0;
      user-select: none;
    }

    &.es {
      &.un_sdg01 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-01.png);
      }

      &.un_sdg02 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-02.png);
      }

      &.un_sdg03 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-03.png);
      }

      &.un_sdg04 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-04.png);
      }

      &.un_sdg05 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-05.png);
      }

      &.un_sdg06 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-06.png);
      }

      &.un_sdg07 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-07.png);
      }

      &.un_sdg08 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-08.png);
      }

      &.un_sdg09 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-09.png);
      }

      &.un_sdg10 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-10.png);
      }

      &.un_sdg11 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-11.png);
      }

      &.un_sdg12 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-12.png);
      }

      &.un_sdg13 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-13.png);
      }

      &.un_sdg14 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-14.png);
      }

      &.un_sdg15 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-15.png);
      }

      &.un_sdg16 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-16.png);
      }

      &.un_sdg17 {
        background-image: url(../assets/images/sdg/es/S_SDG_inverted_WEB-17.png);
      }
    }

    &.en {
      &.un_sdg01 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-01.png);
      }

      &.un_sdg02 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-02.png);
      }

      &.un_sdg03 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-03.png);
      }

      &.un_sdg04 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-04.png);
      }

      &.un_sdg05 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-05.png);
      }

      &.un_sdg06 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-06.png);
      }

      &.un_sdg07 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-07.png);
      }

      &.un_sdg08 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-08.png);
      }

      &.un_sdg09 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-09.png);
      }

      &.un_sdg10 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-10.png);
      }

      &.un_sdg11 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-11.png);
      }

      &.un_sdg12 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-12.png);
      }

      &.un_sdg13 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-13.png);
      }

      &.un_sdg14 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-14.png);
      }

      &.un_sdg15 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-15.png);
      }

      &.un_sdg16 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-16.png);
      }

      &.un_sdg17 {
        background-image: url(../assets/images/sdg/en/E_Inverted_Icons_WEB-17.png);
      }
    }
  }
}
</style>
