<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>直答 DIRECT ANSWERS</h2>
          <el-collapse v-model="expansion" @change="handleChange">
            <el-collapse-item title="筛选策略" name="1">
              <el-form ref="form" label-width="100px">
                <el-form-item label="排序方式">
                  <el-radio-group v-model="orderPolicy">
                    <el-radio label="时间倒序"></el-radio>
                    <el-radio label="时间正序"></el-radio>
                    <el-radio label="最多同问"></el-radio>
                    <el-radio label="最多回答"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按名称筛选">
                  <el-input v-model="filterText" placeholder="输入问题关键词" style="width: 250px"></el-input>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <!-- main content goes here -->
          <div class="view-card-container">
            <el-row :gutter="20">
              <el-col :lg="8" :md="24" v-for="i in 4" :key="i">
                <question-card style="margin: 10px 0;"></question-card>
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
              <p>Envision Direct-Answers 允许就某一技术性问题邀请指定用户回答。</p>
              <p>浏览你感兴趣的问题，查看受邀用户的回答；也可以在未被邀请的情况下尝试回答你擅长的问题。同样，你可以点击下面的按钮，提出你的疑问并邀请一位你指定的用户为你解惑。</p>
            </el-card>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="发表问题">
                <el-button icon="envision-icon_addmessage" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="我的收藏">
                <el-button icon="el-icon-star-on" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="我的直答">
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
  import QuestionCard from "../components/CardQuestions";
  export default {
    components: {QuestionCard},
    data: () => ({
      expansion: '',
      orderPolicy: '',
      filterText: '',
    })
  }
</script>

<style scoped>
  .view-side {
    margin-left: 50px;
  }
  .view-side > .control {
    text-align: center;
  }
  .view-side > .intro {
    margin: 20px 0;
  }
</style>

<style>
  .el-collapse-item__content {
    padding-bottom: 0;
  }
  .view-side .el-card__body {
    font-size: 13px;
    padding-top: 0;
    padding-bottom: 0;
  }
</style>