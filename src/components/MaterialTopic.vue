<template>
  <div class="material-topic">
    <span class="title">{{ 'Material topic:' | t}}</span>
    <span v-for="(topic, index) in topics" :key="topic['@id']">
      {{ topic.name | t }}
      <span v-if="index < topics.length - 1" class="separate">|</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'app-material-topic',
  data() {
    return {
      topics: []
    };
  },
  methods: {
    setValue(rows) {
      this.topics = rows.getValue('material_topics');
    }
  }
}
</script>

<style lang="scss" scoped>
  .material-topic {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    color: #49545e;
    display: flex;
    font-size: 14px;
    flex-wrap: wrap;
    gap: 5px;
    min-height: 30px;
    width: 100%;

    .title {
      font-weight: bold;
    }

    .separate {
      margin-left: 5px;
    }
  }

</style>
