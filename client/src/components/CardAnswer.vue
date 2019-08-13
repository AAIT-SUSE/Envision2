<template>
  <el-row>
    <el-col :lg="1" class="hidden-md-and-down">
      <div class="actions">
        <el-button circle icon="envision-zantong"></el-button>
        <br>
        <span>123</span>
      </div>
    </el-col>
    <el-col :lg="23" :md="24">
      <el-card shadow="none">
        <div class="card-content">
          <div class="info">
            <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
            <span class="username">Owen Tsai</span>
            <span class="time">2019-06-22 19:00</span>
          </div>
          <div class="answer">
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
            这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容这里是回答的内容
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
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

<style lang="scss" scoped>
  .card-content > .info {
    margin-top: 0;
    margin-bottom: 10px;
  }
  .actions {
    float: right;
    margin-right: 10px;
    text-align: center;

    span {
      margin-top: 10px;
      padding: 10px 0;
      display: block;
      color: #409eff;
      font-size: 13px;
      border: 1px solid #E4E7ED;
      border-radius: 50%;
    }
  }
  .answer {
    font-size: 13px;
    color: #606266;
  }
</style>