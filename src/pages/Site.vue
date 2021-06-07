<template>
  <mr-site class="site-page" :menu="menu" :showSearch="false" :appInfo="appInfo">
    <router-view></router-view>
  </mr-site>
</template>

<script>
import package_json from '../../package.json';
import Menu from '../mixins/Menu';

export default {
  name: 'app-site',
  mixins: [Menu],
  computed: {
    appInfo() {
      return {
        description: package_json.description,
        name: package_json.name,
        shortName: package_json.shortName,
        version: package_json.version,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.site-page {

  /deep/ {
    >header {
      nav {
        .app-name-left {
          width: 168px;
        }
      }
    }

    >main {
      padding: 0;

      .page {
        .header {
          display: none;
        }
      }
    }
  }


  @media screen and (max-width: 1024px) {

    /deep/ {
      >main {
        padding-left: 48px;
      }
    }
  }

  @media screen and (max-width: 640px) {

    /deep/ {
      >main {
        padding-left: 0;
      }
    }
  }
}

</style>
