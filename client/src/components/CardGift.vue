<template>
  <el-card>
    <div class="card-image">
      <el-image src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"></el-image>
    </div>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
    <div class="card-content">
      <p class="intro">800 EC<br>TOSHIBA 东芝U盘 32G，颜色白/蓝任选</p>
    </div>
    <div class="card-actions">
      <span class="context">4 库存剩余</span>
      <el-button size="mini" icon="el-icon-shopping-cart-1">+</el-button>
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