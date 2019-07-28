<template>
  <div class="u-center-subview">
    <card-article v-for="i in 4" :key="i" class="article"></card-article>
  </div>
</template>

<script>
  import CardArticle from './CardArticles.vue'

  export default {
    components: {
      CardArticle
    },
    data: () => ({

    })
  }
</script>

<style scoped>
  .article {
    margin: 20px;
  }
</style>