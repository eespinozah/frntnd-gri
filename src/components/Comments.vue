<template>
  <mr-card-tab-item
    class="app-comments">
    <div class="add-comment">
      <mr-icon>account_box</mr-icon>
      <mr-form
        ref="form"
        :autoLoad="false"
        :rows="rows"
        :showButtons="false"
        @saveenter="submit"
      ></mr-form>
    </div>
    <hr>
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
          <mr-button-icon
            @click="delComment(comment)"
            class="btn-delete">delete</mr-button-icon>
        </li>
      </ul>
    </div>
  </mr-card-tab-item>
</template>

<script>
import Comments from '@/mixins/Comments';
import Form from '@/mixins/Form';

export default {
  name: 'app-comments',
  mixins: [Comments, Form],
  computed: {
    form() {
      return this.$refs.form;
    },
    label() {
      return this.$lang.t('Comments')
    }
  },
  created() {
    this.rows = [
      [
        {
          name: 'content',
          type: 'text'
        }
      ]
    ];
  },
  methods: {
    async submit() {
      const values = this.form.getValues();

      try {
        this.$rest._collection = `comments?year=${this.year}`;
        const dataCollection = await this.$rest.doPost(values, `t${this.digrId}`, this.organizationId);
        this.comments = [ ...dataCollection.getRows(), ...this.comments];

        this.$snack.success(this.$lang.t('Comment created'));
      } catch(e) {
        if ([403, 422].indexOf(e.code) === -1) {
          this.$snack.error(e.message);
        } else {
          this.$snack.warning(e.message);
        }
      }
    },

    async delComment(comment) {
      try {
        this.$rest._collection = 'comments';
        const dataCollection = await this.$rest.doDelete(comment.getId());
        const row = dataCollection.getRows()[0];
        let id = -1;

        this.rows.forEach((r, i) => {
          if (r.getId() === row.getId()) {
            id = i;
          }
        });

        this.rows.splice(id, 1, row);

        this.$snack.success(this.$lang.t('Comment deleted'));
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
@import "~@/scss/comments";

.app-comments {
  box-sizing: border-box;
  height: 400px;

  @extend %comments;

  .add-comment {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    height: 50px;
    padding: 0;

    >i {
      color: #3498DB;
      flex: 0 1 auto;
      font-size: 40px;
      padding-right: 5px;
      position: relative;
      top: 0;
    }

    >form {
      display: flex;
      flex: 1 1 auto;
      margin: 0;
      padding-left: 0;
      width: 100%;

      .form-row {
        .form-cell {
          margin-left: 0;
        }
      }

      /deep/ label {
        flex: 1 1 auto;
        justify-content: center;
        padding-right: 10px;

        span {
          display: none;
        }
      }
    }

  }

  hr {
    background-color: rgba(200, 200, 200, 0.4);
    border: none;
    height: 2px;
    margin: 0;
    width: 100%;
  }

  .list-comments {
    ul {
      li {
        .btn-delete {
          color: #b2c2d4;
          display: none;
          position: absolute !important;
          right: 5px;
          bottom: 5px;
        }

        &:hover {
          .btn-delete {
            display: block;
          }
        }
      }
    }
  }
}
</style>
