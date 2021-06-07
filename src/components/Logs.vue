<template>
  <mr-card-tab-item
    class="app-logs"
    :label="'Logs' | t">
    <div class="list-comments">
      <ul>
        <li v-for="(comment, index) of comments" :key="index">
          <mr-icon>account_box</mr-icon>
          <div>
            <div>
              <span>{{ comment.getValue('account.username') }}</span>
              <span>{{ comment.getValue('creation_time') | moment }}</span>
            </div>
            <mr-comment-markdown
              :content="comment.getValue('content')"></mr-comment-markdown>
          </div>
        </li>
      </ul>
    </div>
  </mr-card-tab-item>
</template>

<script>
import Comments from '@/mixins/Comments';

export default {
  name: 'app-logs',
  mixins: [Comments],
  props: {
    isLog: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    label() {
      return this.$lang.t('Logs')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/scss/comments";

.app-logs {
  box-sizing: border-box;
  height: 400px;
  margin-top: 0 !important;

  @extend %comments;
}
</style>
