<template>
  <el-card shadow="none">
    <div class="card-content">
      <div class="info">
        <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
        <span class="username">Owen Tsai</span>
        <span class="time">2019-06-22 19:00</span>
      </div>
      <p class="comment">文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
    </div>
  </el-card>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  export default {
    name: 'question-card',
    components: {Avatar},
    data: () => ({

    })
  }
</script>

<style scoped>
  .card-content > .info {
    margin-top: 0;
    margin-bottom: 10px;
  }
  .comment {
    font-size: 13px;
  }
</style>