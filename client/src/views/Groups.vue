<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :md=24 :lg=19>
        <div class="view-main">
          <h2>群组 GROUPS</h2>
          <el-collapse v-model="expansion" @change="handleChange" style="margin-bottom: 10px">
            <el-collapse-item title="筛选策略" name="1">
              <el-form ref="form" label-width="100px">
                <el-form-item label="排序方式">
                  <el-radio-group v-model="orderPolicy">
                    <el-radio label="时间倒序"></el-radio>
                    <el-radio label="时间正序"></el-radio>
                    <el-radio label="最多成员"></el-radio>
                    <el-radio label="最高贡献"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="按名称筛选">
                  <el-input v-model="filterText" placeholder="输入群组关键词" style="width: 250px"></el-input>
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>

          <!-- main content goes here -->
          <div class="view-card-container">
            <el-row :gutter="20">
              <el-col :lg="8" :md="24" v-for="i in 4" :key="i">
                <g-card style="margin: 10px 0;"></g-card>
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
              <p>Envision Groups 是人工智能技术协会开展学习交流、技术培训与分享的基本单位。</p>
              <p>浏览并选择你感兴趣的群组申请加入，或者点击下面的按钮申请创建一个新的群组。</p>
            </el-card>
          </div>

          <el-row type="flex" justify="space-between" class="control">
            <el-col>
              <el-tooltip placement="bottom" content="我的群组">
                <el-button icon="envision-pengyoufill" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="创建群组">
                <el-button icon="envision-icon_add" circle></el-button>
              </el-tooltip>
            </el-col>
            <el-col>
              <el-tooltip placement="bottom" content="群组管理">
                <el-button icon="envision-icon_workset" circle></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import GCard from '../components/CardGroups'

  export default {
    components: {
      GCard
    },
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

<!--<style>-->
<!--  .el-collapse-item__content {-->
<!--    padding-bottom: 0;-->
<!--  }-->
<!--  .view-side .el-card__body {-->
<!--    font-size: 13px;-->
<!--    padding-top: 0;-->
<!--    padding-bottom: 0;-->
<!--  }-->
<!--</style>-->