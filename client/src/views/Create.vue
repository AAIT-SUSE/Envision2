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
      <div class="hidden-md-and-down">
        <div class="view-side pos-fixed p-right-50">
          <div class="intro">
            <el-card shadow="hover">
              <p>Envision Create 集成了一个强大的富文本编辑器，可以很方便地创建、编辑、排版文字，并添加图片、视频、代码等元素</p>
              <p>当你有想要记录和分享的东西，别忘了使用Envision Create！</p>
            </el-card>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="快速发表">
                <el-button icon="el-icon-upload" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="快速保存">
                <el-button icon="envision-icon_invite_fill" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="我的草稿">
                <el-button icon="envision-icon_compile" circle></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data:() => ({
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