<template>
  <div class="page-wrapper">
    <!-- Carousel -->
    <el-carousel :interval="4000" type="card" height="350px" trigger="click">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <!-- News and Announcements -->
    <div class="section-title">新闻与公告<br><span class="section-subtitle">News & Announcements</span></div>
    <div class="section-content">
      <el-row :gutter="30">
        <el-col :lg="8" :xs="24" v-for="news in newsList" :key="news.title">
          <e-card :title="news.title" style="margin-bottom: 20px"></e-card>
        </el-col>
      </el-row>
    </div>
    <div class="section-actions">
      <el-button round size="small" icon="el-icon-arrow-down"> 查看更多</el-button>
    </div>

    <!-- Articles Section -->
    <div class="section-title">文章<br><span class="section-subtitle">Articles</span></div>
    <div class="section-content">
      <el-row :gutter="30">
        <el-col :lg="8" :xs="24" v-for="news in newsList" :key="news.title">
          <a-card style="margin-bottom: 20px"></a-card>
        </el-col>
      </el-row>
    </div>
    <div class="section-actions">
      <el-button round size="small" icon="el-icon-arrow-down"> 查看更多</el-button>
    </div>

    <!-- Questions Section -->
    <div class="section-title">直答<br><span class="section-subtitle">Direct Answer</span></div>
    <div class="section-content">
      <el-row :gutter="30">
        <el-col :lg="8" :xs="24" v-for="news in newsList" :key="news.title">
          <q-card style="margin-bottom: 20px"></q-card>
        </el-col>
      </el-row>
    </div>
    <div class="section-actions">
      <el-button round size="small" icon="el-icon-arrow-down"> 查看更多</el-button>
    </div>

    <!-- Users Section -->
    <div class="section-title">卓越贡献者<br><span class="section-subtitle">Prominent Contributor</span></div>
    <div class="section-content">
      <el-row :gutter="30">
        <el-col :lg="6" :xs="24" v-for="news in 4" :key="news.title">
          <u-card style="margin-bottom: 20px"></u-card>
        </el-col>
      </el-row>
    </div>
    <div class="section-actions">
      <p class="section-subtitle">感谢所有为社区做出贡献的用户</p>
    </div>
  </div>

</template>

<script>
  import ECard from '../components/CardNews'
  import ACard from '../components/CardArticles'
  import QCard from '../components/CardQuestions'
  import UCard from '../components/CardUsers'

  export default {
    components: {
      ECard,
      ACard,
      QCard,
      UCard
    },
    data: () => ({
      newsList: [
        {
          title: '人工智能技术协会关于素质选修学分认定的通知',
        },
        {
          title: '人工智能技术协会关于素质选修学分认定的通知',
        },
        {
          title: '人工智能技术协会关于素质选修学分认定的通知',
        },
      ]
    }),

  }
</script>

<style scoped>
  .medium {
    line-height: 350px;
    display: block;
    text-align: center;
  }
  .section-title {
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin: 35px 0 30px 0;
    text-transform: uppercase;
  }
  .section-title > span {
    font-size: 13px;
  }
  .section-content {
    width: 100%;
  }
  .section-actions {
    text-align: center;
  }
  .section-actions > .section-subtitle {
    font-size: 13px;
    color: #909399;
  }
</style>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>