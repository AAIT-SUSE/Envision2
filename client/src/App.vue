<template>
  <el-container>

    <el-header style="padding: 0">
      <toolbar></toolbar>
    </el-header>

    <el-main style="padding: 10px 80px; min-height: 350px;" class="hidden-md-and-down">
      <router-view></router-view>
    </el-main>
    <el-main style="padding: 10px" class="hidden-lg-and-up">
      <router-view></router-view>
    </el-main>

    <el-footer style="padding: 0;" class="hidden-md-and-down">
      <footbar></footbar>
    </el-footer>

  </el-container>
</template>

<script>
import Toolbar from './components/AppToolbar.vue'
import Footbar from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    Toolbar,
    Footbar
  }
}
</script>

<style>
  .el-container {
    padding: 0;
  }
</style>