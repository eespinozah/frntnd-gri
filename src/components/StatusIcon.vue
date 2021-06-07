<template>
  <span class="status-icon material-icons"
    :class="{ done: status === true, omitted: status === false }">
    {{ statusIcon }}
  </span>
</template>

<script>

export default {
  name: 'app-status-icon',

  props: {
    field: Object
  },
  inject: ['getAssigments'],
  computed: {
    assigments() {
      return this.getAssigments();
    },
    statusIcon() {
      if (this.status === true) {
        return 'done';
      }

      if (this.status === false) {
        return 'remove';
      }

      return 'close';
    }
  },
  data() {
    return {
      status: null
    };
  },
  watch: {
    assigments: {
      immediate: false,
      handler(assigments) {
        const assigment = assigments.getRowCollectionByField('shortname', this.field.name);

        if (assigment) {
          this.status = assigment.getValue('status')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.status-icon {
  color: #FF0800;

  &.done {
    color: #98FB98;
  }

  &.omitted {
    color: #FFD300;
  }
}
</style>
