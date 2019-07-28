<template>
  <el-card>
    <div class="card-image" v-if="coverImage">
      <el-image :src="coverImage" fit="cover"></el-image>
    </div>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-content">
      <div class="info">
        <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
        <span class="username">Owen Tsai</span>
        <span class="time">2019-06-22 19:00</span>
      </div>
    </div>
    <div class="card-actions">
      <span class="context">123 赞同</span>
      <el-button size="mini" icon="envision-zantong"> 赞同</el-button>
      <el-button size="mini">阅读全文</el-button>
    </div>
  </el-card>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  export default {
    components: { Avatar },
    data: () => ({
      title: '写给哈批的Vue.js教程（一）',
      coverImage: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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