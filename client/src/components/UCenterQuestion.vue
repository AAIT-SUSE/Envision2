<template>
  <div class="u-center-subview">
    <card-question v-for="i in 4" :key="i" class="question"></card-question>
  </div>
</template>

<script>
  import CardQuestion from './CardQuestions.vue'

  export default {
    components: {
      CardQuestion
    },
    data: () => ({

    })
  }
</script>

<style scoped>
  .question {
    margin: 20px;
  }
</style>