<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <el-button type="text" icon="el-icon-arrow-left">返回文章列表</el-button>
          <h2>文章标题</h2>
          <div class="article-author-area">
            <avatar username="Owen Tsai" style="display: inline-block" :size="40"></avatar>
            <span>文章作者 发表于 2019-01-02</span>
          </div>

          <!-- main content goes here -->
          <div class="view-card-container"></div>

        </div>
      </el-col>
      <!-- Right Panel -->
      <el-col :span="5" class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <el-card shadow="hover">
              <p>123 个赞</p>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Avatar from "vue-avatar";

  export default {
    components: {Avatar},
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
</style>