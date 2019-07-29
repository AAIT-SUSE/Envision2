<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>文章 ARTICLES</h2>
          <el-collapse v-model="expansion" @change="handleChange">
            <el-collapse-item title="筛选策略" name="1">
              <el-form ref="form" label-width="100px">
                <el-form-item label="排序方式">
                  <el-radio-group v-model="orderPolicy">
                    <el-radio label="时间倒序"></el-radio>
                    <el-radio label="时间正序"></el-radio>
                    <el-radio label="最多赞同"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按名称筛选">
                  <el-input v-model="filterText" placeholder="输入文章关键词" style="width: 250px"></el-input>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <!-- main content goes here -->
          <div class="view-card-container">
            <el-row :gutter="20">
              <el-col :lg="8" :md="24" v-for="i in 4" :key="i">
                <article-card style="margin: 10px 0;"></article-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <!-- Right Panel -->
      <el-col :span="5" class="hidden-md-and-down">
        <div class="view-side" style="position: fixed; padding-right: 50px">
          <div class="intro">
            <el-card shadow="hover">
              <p>Envision Articles 允许用文章的形式记录生活灵感、分享技术心得、交流学习经验。</p>
              <p>在这里浏览你感兴趣的文章，赞赏或评论作者，或者点击下面的按钮也试着撰写一篇新的文章。</p>
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
  import ArticleCard from "../components/CardArticles";
  export default {
    components: {ArticleCard},
    data: () => ({
      expansion: '',
      orderPolicy: '',
      filterText: '',
    })
  }
</script>