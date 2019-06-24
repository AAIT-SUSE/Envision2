<template>
  <el-card>
    <div class="card-image">
      <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
    </div>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-content">
      <p class="intro">文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
      <div class="info">
        <span class="time">800 EC</span>
      </div>
    </div>
    <div class="card-actions">
      <span class="context">4 库存剩余</span>
      <el-button size="mini">礼品详情</el-button>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'article-card',
    data: () => ({
      title: '东芝 TOSHIBA 32G U盘'
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
  .info {
    margin-top: 10px;
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
  .card-image > .el-image {
    height: 180px;
    margin-bottom: 10px;
  }
  .card-actions > .context {
    font-size: 12px;
    float: left;
    color: #909399;
    line-height: 25px;
    margin-top: 5px;
  }
</style>