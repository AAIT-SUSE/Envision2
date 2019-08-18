<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <el-link type="info" href="#/groups"><i class="el-icon-arrow-left"></i>群组列表</el-link>
          <h2>C语言学习小组</h2>
          <div class="group-creator-area">
            <avatar username="Owen Tsai" style="display: inline-block" :size="40"></avatar>
            <span>Owen Tsai 创建于 2019-01-02 17:00</span>
          </div>

          <!-- main content goes here -->
          <div class="view-card-container">
            <div class="group-pinned-alert"></div>
            <h3>通知与公告</h3>
            <div class="group-announcements">
              <card-news class="pinned-news-1" title="测试通知"></card-news>
              <card-news class="pinned-news-2" title="测试通知"></card-news>

              <div class="news-list">
                <card-scroll>
                  <ul>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                    <li><i class="el-icon-info"></i> <a href="#">[08-17 19:00] 这是一条测试新闻</a></li>
                  </ul>
                </card-scroll>
              </div>
            </div>
            
            <h3>任务</h3>
            <div class="group-tasks">
              <el-card class="task-container" shadow="none">
                <div class="card-title">
                  <h4>C语言第一周练习题</h4>
                </div>
              </el-card>
              <el-card class="task-status" shadow="none">
                <div class="card-title">
                  <h4>任务情况汇总</h4>
                </div>
              </el-card>
            </div>
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
                <p>我不是这个小组的成员 <a href="#">[点击申请]</a></p>
                <p><icon class="el-icon-date"></icon><span> 创建日期 2019-01-02</span></p>
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
  import CardScroll from '../components/CardScroll';
  import CardNews from '../components/CardNews';

  export default {
    components: {
      Avatar,
      CardScroll,
      CardNews
    },
    data:() => ({
      
    })
  }
</script>

<style lang="scss" scoped>
  .group-creator-area {
    vertical-align: middle;

    span {
      font-size: 13px;
      color: #333;
      margin-left: 10px;
    }
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
    grid-template-rows: auto;
    grid-template-columns: 35% 35% 30%;
    grid-template-areas: "pinned1 pinned2 others";
    grid-gap: 20px;

    .pinned-news-1 {
      grid-area: pinned1;
    }
    .pinned-news-2 {
      grid-area: pinned2;
    }
  }
  .news-list {
    ul {
      font-size: 13px;
      height: 200px;
      overflow-y: scroll;
      margin: 0;
      padding-left: 20px;

      :nth-child(1) {
        margin-top: 8px;
      }
      :nth-last-child(1) {
        margin-bottom: 8px;
      }

      li {
        list-style: none;

        i {
          margin-right: 5px;
          font-size: 16px;
        }
      }
    }
  }

  .group-tasks {
    display: grid;
    grid-template-columns: 60% 40%;
    grid-auto-rows: 1fr;
    grid-template-areas: "task stat";
    grid-gap: 20px;

    .task-container {
      grid-area: task;
    }
    .task-status {
      grid-area: stat;
    }
  }

  a {
    color: #606266;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #409eff;
    }
  }
</style>