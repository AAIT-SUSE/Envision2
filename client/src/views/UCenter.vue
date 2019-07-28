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
      <el-row :gutter="20">
        <el-col :lg="16" :md="24">
          <el-tabs v-model="$route.name" type="card" @tab-click="handleTabClick" :stretch="true">
            <el-tab-pane label="文章" name="my-articles"></el-tab-pane>
            <el-tab-pane label="提问" name="my-questions"></el-tab-pane>
            <el-tab-pane label="回答" name="my-answers"></el-tab-pane>
            <el-tab-pane label="群组" name="my-groups"></el-tab-pane>
          </el-tabs>
          <router-view class="user-main-left"></router-view>
        </el-col>
        <el-col :span="8" class="hidden-md-and-down">
          <el-card shadow="none" class="u-center-side-card">
            <h4 style="text-align: center">成就 | ACHIEVEMENTS</h4>
            <div class="medals">
              <p><icon class="envision-xihuan"></icon><span> 221 次感谢</span></p>
              <p><icon class="el-icon-coin"></icon><span> 1992 Envision积分</span></p>
              <p><icon class="el-icon-date"></icon><span> 2019-01-01 加入</span></p>
              <p><icon class="el-icon-collection"></icon><span> 12 创作数</span></p>
              <hr>
              <p><icon class="el-icon-medal-1"></icon><span> Envision 零号用户</span></p>
              <p><icon class="el-icon-trophy"></icon><span> 人工智能技术协会第一届荣誉会员</span></p>
              <p><icon class="el-icon-medal"></icon><span> Envision 初代贡献者</span></p>
              <p><icon class="el-icon-medal"></icon><span> Envision 核心开发者者</span></p>
            </div>
          </el-card>
        </el-col>
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

    }),
    methods: {
      handleTabClick(tab) {
        switch (tab.name) {
          case "my-articles":
            this.$router.push('/u-center/articles');
            break;

          case "my-questions":
            this.$router.push('/u-center/questions');
            break;

          case "my-answers":
            this.$router.push('/u-center/answers');
            break;

          default:
            this.$router.push('/u-center/groups');
            break;
        }
      }
    },
    mounted() {

    }
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
    top: -65px;
  }
  .card-user-profile > .info {
    position: relative;
    top: -65px;
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
  .user-main {
    margin-top: 20px;
  }
  .medals p {
    margin-bottom: 8px;
    margin-top: 8px;
  }
  .medals icon {
    vertical-align: middle;
    font-size: 20px;
  }
  .medals span {
    vertical-align: middle;
    line-height: 20px;
    font-size: 13px;
  }
  .user-main-left {
    border: 1px solid #E4E7ED;
    margin-top: -16px;
  }
</style>