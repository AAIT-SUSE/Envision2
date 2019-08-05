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