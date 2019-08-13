<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <el-link type="info" href="#/questions"><i class="el-icon-arrow-left"></i>问题列表</el-link>
          <h2>ES6中还有没有使用闭包的必要？</h2>
          <div class="question-author-area">
            <avatar username="Owen Tsai" style="display: inline-block" :size="40"></avatar>
            <span>Owen Tsai 提问于 2019-01-02 17:00</span>
          </div>

          <!-- main content goes here -->
          <div class="view-card-container">
            <div class="question-description">
              <p>如题，es6的引入已经解决了之前Js没有块级作用域的问题，想请问一下在这种情况下还有必要在es6中使用闭包吗？如果有，用在什么场合？是利用闭包解决了什么问题？</p>
            </div>
            <div class="best-answer">
              <h3>最佳回答</h3>
              <card-answer></card-answer>
            </div>
            <div class="answers-container hidden-md-and-down">
              <h3>所有回答</h3>
              <div v-for="i in 4" :key="i">
                <card-answer style="margin: 10px 0;"></card-answer>
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
  import CardAnswer from '../components/CardAnswer'

  export default {
    components: {
      Avatar,
      CardAd,
      CardAnswer
    },
    data:() => ({

    })
  }
</script>

<style scoped>
  .question-author-area {
    vertical-align: middle;
  }
  .question-author-area > span {
    font-size: 13px;
    color: #333;
    margin-left: 10px;
  }
  .question-description {
    border: 1px solid #E4E7ED;
    border-radius: 10px;
    margin: 10px;
    padding: 0 20px;
  }
  .answers-container {

  }
</style>