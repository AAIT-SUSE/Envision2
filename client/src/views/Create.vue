<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>创作 CREATE</h2>
          <el-tabs v-model="$route.name" @tab-click="handleClick">
            <el-tab-pane label="创作文章" name="create-article"></el-tab-pane>
            <el-tab-pane label="创建问题" name="create-question"></el-tab-pane>
          </el-tabs>
          <router-view></router-view>
        </div>
      </el-col>
      <!-- Right Panel -->
      <el-col :span="5" class="hidden-md-and-down">
        <div class="view-side" style="position: fixed; padding-right: 50px">
          <div class="intro">
            <el-card shadow="hover">
              <p>Envision Create 集成了一个强大的富文本编辑器，可以很方便地创建、编辑、排版文字，并添加图片、视频、代码等元素。同时，Envision Create 也支持多人协同编辑，提高社团事务效率。</p>
              <p>当你有想要记录和分享的东西，别忘了使用Envision Create！</p>
            </el-card>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="购物车">
                <el-button icon="envision-gouwuchefill" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="购物记录">
                <el-button icon="envision-quan" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="清空购物车">
                <el-button icon="envision-icon_trashcan" circle></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

  export default {
    name: 'app',
    data:() => ({
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        language: 'zh-cn'
      },
      activeTabName: '',
    }),
    methods: {
      handleClick(tab) {
        if (tab.name === 'create-article') {
          this.$router.push('/create/article')
        } else {
          this.$router.push('/create/question')
        }
      }
    },
    mounted() {
      console.log(this.$route);
    }
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