<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <el-link type="info" href="#/groups"><i class="el-icon-arrow-left"></i>群组列表</el-link>
          <h2>C语言学习小组</h2>
          <div class="article-author-area">
            <avatar username="Owen Tsai" style="display: inline-block" :size="40"></avatar>
            <span>Owen Tsai 创建于 2019-01-02 17:00</span>
          </div>

          <!-- main content goes here -->
          <div class="view-card-container">
            <div class="group-pinned-alert"></div>
            <h3>通知与公告</h3>
            <div class="group-announcements">
              <el-card class="pinned-news-1">
                <div class="card-title">
                  <h4>{{ pinnedNews.title }}</h4>
                </div>
                <div class="card-content">
                  <p class="intro">文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
                  <div class="info">
                    <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
                    <span class="username">Owen Tsai</span>
                    <span class="time">2019-06-22 19:00</span>
                  </div>
                </div>
              </el-card>

              <el-card class="pinned-news-2">
                <div class="card-title">
                  <h4>{{ pinnedNews.title }}</h4>
                </div>
                <div class="card-content">
                  <p class="intro">文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容文字节段内容</p>
                  <div class="info">
                    <avatar username="Owen Tsai" :size="30" style="display: inline-block;"></avatar>
                    <span class="username">Owen Tsai</span>
                    <span class="time">2019-06-22 19:00</span>
                  </div>
                </div>
              </el-card>

              <el-card class="news-list" shadow="none">
                <h4>更多通知</h4>
                <ul>
                  <li><a href="#">C语言学习小组一期培训通知</a></li>
                  <li><a href="#">C语言学习小组一期培训通知</a></li>
                  <li><a href="#">C语言学习小组一期培训通知</a></li>
                  <li><a href="#">C语言学习小组一期培训通知</a></li>
                  <li><a href="#">C语言学习小组一期培训通知</a></li>
                </ul>
              </el-card>
            </div>
            <div class="group-tasks"></div>
            <div class="group-member-list"></div>
          </div>
        </div>
      </el-col>
      <!-- Right Panel -->
      <div class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <el-card shadow="hover">
              <h4 style="text-align: center">群组情报</h4>
              <div class="group-info">
                <p><icon class="el-icon-date"></icon><span> 创建日期 2019-01-02 17:00</span></p>
                <p><icon class="el-icon-sort"></icon><span> 综合评定 10</span></p>
                <p><icon class="el-icon-user"></icon><span> 成员人数 69</span></p>
                <p><icon class="el-icon-coin"></icon><span> 每周奖励 60 x Envision积分</span></p>
              </div>
            </el-card>
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

  export default {
    components: {
      Avatar,
    },
    data:() => ({
      pinnedNews: {
        title: 'C语言学习小组一期培训通知'
      }
    })
  }
</script>

<style lang="scss" scoped>
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
  .group-info{
    padding-bottom: 10px;
    p {
      margin: 8px auto;
    }
  }
  .group-announcements {
    margin-top: 20px;
    display: grid;
    grid-template-rows: 160px;
    grid-template-columns: 35% 35% 30%;
    grid-template-areas: "pinned1 pinned2 others";
    grid-gap: 20px;

    .pinned-news-1 {
      grid-area: pinned1;
    }
    .pinned-news-2 {
      grid-area: pinned2;
    }
    .news-list {
      font-size: 13px;
      grid-area: others;
      height: 160px;
      overflow-y: scroll;

      h4 {
        margin-top: 0;
      }
    }
  }
</style>