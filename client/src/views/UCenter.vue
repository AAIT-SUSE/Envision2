<template>
  <div class="view-container">
    <div class="user-header">
      <el-card shadow="none">
        <div class="card-image">
          <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" fit="cover"></el-image>
        </div>
        <div class="card-user-profile">
          <avatar id="avatar" username="Owen Tsai" :size="80"></avatar>
          <div class="info">
            <h2>Owen Tsai</h2>
            <p>人工智能技术协会 软件技术部 干事</p>
            <p>积分 1902 | 感谢 12 | 注册日期 2019/01/01</p>
          </div>
        </div>
        <div class="card-user-actions">
          <el-button size="mini">编辑个人资料</el-button>
        </div>
      </el-card>
    </div>

    <div class="user-main">
      <el-row>
        <el-col></el-col>
        <el-col></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import Avatar from 'vue-avatar'

  export default {
    components: {
      Avatar,
    },
    data: () => ({

    })
  }
</script>

<style scoped>
  .view-container {
    max-width: 1000px;
    margin: 0 auto;
  }
  .card-image > .el-image {
    height: 260px;
    margin-bottom: 10px;
  }
  #avatar {
    position: relative;
    margin: 0 auto;
    top: -50px;
  }
  .card-user-profile > .info {
    position: relative;
    top: -50px;
    text-align: center;
    font-size: 13px;
    line-height: 1;
  }
  .card-user-profile {
    margin-bottom: -50px;
  }
  .card-user-actions {
    text-align: center;
  }
</style>