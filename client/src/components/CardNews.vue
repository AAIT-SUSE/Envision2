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
        <span class="time">2019-06-22 19:00</span>
      </div>
    </div>
    <div class="card-actions">
      <el-button size="mini">分享链接</el-button>
      <el-button size="mini">查看详情</el-button>
    </div>
  </el-card>
</template>

<script>
  import Avatar from "vue-avatar/src/Avatar";
  export default {
    name: 'e-card',
    components: {Avatar},
    props: {
      title: String,
    }
  }
</script>