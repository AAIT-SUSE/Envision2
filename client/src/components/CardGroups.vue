<template>
  <el-card>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-content">
      <p class="intro">文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
      <div class="info">
        <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
        <span class="username">Owen Tsai</span>
        <span class="time">创建于 2019-06-22 19:00</span>
      </div>
    </div>
    <div class="card-actions">
      <span class="context">123 名成员</span>
      <el-button size="mini">申请加入</el-button>
      <el-button size="mini">群组主页</el-button>
    </div>
  </el-card>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  export default {
    name: 'article-card',
    components: {Avatar},
    data: () => ({
      title: 'C语言学习小组'
    }),

  }
</script>

<style scoped>
  .card-title > h4 {
    font-size: 16px;
    margin: 0;
  }
  .card-content {
    font-size: 12px;
    color: #909399;
  }
  .card-content > .intro {
    overflow: hidden;
    line-height: 18px;
    text-overflow: ellipsis;
    height: 36px;
  }
  .info {
    margin-top: 10px;
  }
  .card-content > .info > .username {
    margin-left: 5px
  }
  .card-content > .info > .time {
    display: inline-block;
    float: right;
    line-height: 30px;
    padding-right: 5px
  }
  .card-actions {
    margin-top: 6px;
    text-align: right;
  }
  .card-actions > .context {
    font-size: 12px;
    float: left;
    color: #909399;
    line-height: 25px;
    margin-top: 5px;
  }
</style>