<template>
  <a v-if="showLink" :href="path" target="_blank">
    <h1 class="app-title"><slot></slot></h1>
  </a>

  <h1 v-else class="app-title"><slot></slot></h1>
</template>

<script>
export default {
  name: 'app-title',
  props: {
    showLink: {
      type: Boolean,
      default: false
    },
    digrId: Number
  },
  data() {
    return {
      lang: null
    }
  },
  computed: {
    path() {
      return `/assets/standards/${this.lang}/${this.digrId}.pdf`;
    }
  },
  mounted() {
    this.$lang.getLang().subscribe(lang => this.lang = lang.split('-')[0]);
  }
}
</script>

<style lang="scss" scoped>
  a {
    color: #000000;
    height: 30px;
    text-decoration: none;

    &:hover {
      color: #2980b9;
      cursor: pointer;
      font-size: 14px;
      font-weight: normal;
      padding: 0;
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;
  }
</style>
