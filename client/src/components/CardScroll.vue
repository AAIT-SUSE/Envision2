<template>
  <div>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-scroll-area">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      title: '更多通知',
    }),
    created() {
      
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    h4 {
      margin: 8px;
    }
  }

  .card-scroll-area {
    border: 1px solid #dcdfe6;
    border-top: 0;
    border-radius: 2px;
  }
</style>