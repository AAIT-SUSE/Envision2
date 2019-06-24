<template>
  <el-card>
    <el-row>
      <el-col :span="6">
        <avatar username="Owen Tsai"></avatar>
      </el-col>
      <el-col :span="18">
        <div class="card-content">
          <p class="username">Owen Tsai</p>
          <p class="intro">人工智能技术协会荣誉会员</p>
        </div>
      </el-col>
    </el-row>
    <div class="card-actions">
      <span class="context">123 次感谢</span>
      <el-button size="mini">感谢Ta</el-button>
      <el-button size="mini">访问空间</el-button>
    </div>
  </el-card>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  export default {
    components: {Avatar}
  }
</script>

<style scoped>
  .card-content {
    font-size: 14px;
    line-height: 16px;
  }
  .card-content > p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .intro {
    font-size: 12px;
    color: #909399;
    margin-top: 0;
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

<style>
  .el-card__body {
    padding-bottom: 14px;
  }
</style>