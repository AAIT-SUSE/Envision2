<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <el-link type="info" href="#/articles"><i class="el-icon-arrow-left"></i>文章列表</el-link>
          <h2>JavaScript 中的闭包与函数</h2>
          <div class="article-author-area">
            <avatar username="Owen Tsai" style="display: inline-block" :size="40"></avatar>
            <span>Owen Tsai 发表于 2019-01-02 17:00</span>
          </div>

          <!-- main content goes here -->
          <div class="view-card-container">
            <div class="article-content"></div>
            <div class="article-comment-wrapper">
              <h3>评论</h3>
              <div class="article-comments p-left-20 p-right-20" v-for="i in 4" :key="i">
                <card-comment class="m-bottom-10"></card-comment>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <!-- Right Panel -->
      <div class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <card-ad></card-ad>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="发表文章">
                <el-button icon="el-icon-edit" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="我的收藏">
                <el-button icon="el-icon-star-on" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="我的创作">
                <el-button icon="envision-icon_invite_fill" circle></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import Avatar from 'vue-avatar';
  import CardAd from '../components/CardAd'
  import CardComment from '../components/CardComment'

  export default {
    components: {
      Avatar,
      CardAd,
      CardComment
    },
    data:() => ({

    })
  }
</script>

<style scoped>
  .article-author-area {
    vertical-align: middle;
  }
  .article-author-area > span {
    font-size: 13px;
    color: #333;
    margin-left: 10px;
  }
  .article-content {
    margin: 20px 0;
  }
</style>