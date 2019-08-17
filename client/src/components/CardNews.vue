<template>
  <el-card>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-content">
      <div class="importtant-info">
        <p><strong>时效期至：</strong>2019-08-31 19:00</p>
        <p><strong>通知对象：</strong>人工智能技术协会C语言小组成员</p>
      </div>
      <p class="intro"><strong>摘要：</strong>文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
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