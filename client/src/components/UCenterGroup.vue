<template>
  <div class="u-center-subview">
    <card-group v-for="i in 4" :key="i" class="group"></card-group>
  </div>
</template>

<script>
  import CardGroup from './CardGroups.vue'

  export default {
    components: {
      CardGroup
    },
    data: () => ({

    })
  }
</script>

<style scoped>
  .group {
    margin: 20px;
  }
</style>