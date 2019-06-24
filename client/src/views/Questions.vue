<template>
  <div class="view-container">
    <el-row>
      <!-- Main View -->
      <el-col :span="19">
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
      <el-col :span="5">
        <div class="view-side">

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
  .view-main > h2 {

  }
</style>

<style>
  .el-collapse-item__content {
    padding-bottom: 0;
  }
</style>