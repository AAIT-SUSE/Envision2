<template>
  <el-menu :default-active="$route.path" router class="el-nav" mode="horizontal">
    <el-menu-item class="hidden-md-and-down no-active-mark">
      <img :src="logoTextSrc" alt="Envision" class="logo">
    </el-menu-item>
    <el-menu-item class="hidden-lg-and-up no-active-mark">
      <img :src="logoSrc" alt="Envision" class="logo">
    </el-menu-item>

    <el-menu-item index="/main" class="hidden-md-and-down">资讯</el-menu-item>
    <el-menu-item index="/groups" class="hidden-md-and-down">群组</el-menu-item>
    <el-menu-item index="/articles" class="hidden-md-and-down">文章</el-menu-item>
    <el-menu-item index="/questions" class="hidden-md-and-down">直答</el-menu-item>

    <el-submenu index="desktop-nav" class="hidden-md-and-down">
      <template slot="title">快速访问</template>
      <el-menu-item index="/gift-shop">礼品店</el-menu-item>
      <el-menu-item index="/hof">名人堂</el-menu-item>
      <el-menu-item index="/code-base">代码库</el-menu-item>
      <el-submenu index="desktop-sub-nav" class="hidden-md-and-down">
        <template slot="title">创作</template>
        <el-menu-item index="/create/article">新文章</el-menu-item>
        <el-menu-item index="/create/question">新问题</el-menu-item>
      </el-submenu>
    </el-submenu>

    <el-menu-item style="float: right;" class="no-active-mark">
      <el-dropdown @command="UserDropdownCommand">
        <avatar username="Owen Tsai" :size="50"></avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile"><i class="envision-icon_people_fill"></i> 个人中心</el-dropdown-item>
          <el-dropdown-item command="draft"><i class="envision-icon_invite_fill"></i> 我的草稿</el-dropdown-item>
          <el-dropdown-item command="settings"><i class="envision-icon_setting_fill"></i> 系统设置</el-dropdown-item>
          <el-dropdown-item command="logout" divided><i class="el-icon-switch-button"></i> 注销会话</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>

    <el-menu-item style="float: right" class="hidden-md-and-down no-active-mark">
      <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择" id="search-prepend-select">
          <el-option label="全部" value="all"></el-option>
          <el-option label="文章" value="articles"></el-option>
          <el-option label="问题" value="questions"></el-option>
          <el-option label="群组" value="groups"></el-option>
          <el-option label="用户" value="users"></el-option>
        </el-select>
        <el-button slot="append" icon="envision-sousuo"></el-button>
      </el-input>
    </el-menu-item>

    <!-- The following items only appear when using a small device like mobile phone -->
    <el-submenu index="mobile-nav" class="hidden-md-and-up">
      <template slot="title">导航</template>
      <el-menu-item index="/main">资讯</el-menu-item>
      <el-menu-item index="/groups">群组</el-menu-item>
      <el-menu-item index="/articles">文章</el-menu-item>
      <el-menu-item index="/questions">直答</el-menu-item>
      <el-menu-item index="/gift-shop">礼品店</el-menu-item>
      <el-menu-item index="/hof">名人堂</el-menu-item>
      <el-menu-item index="/code-base">代码库</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  import logoTextSrc from '../assets/imgs/logo-text.png'
  import logoSrc from '../assets/imgs/logo.png'
  import Avatar from "vue-avatar/src/Avatar";

  export default {
    components: {Avatar},
    data: () => ({
      logoSrc: logoSrc,
      logoTextSrc: logoTextSrc,
      select: 'all',
      searchInput: '',
    }),
    methods: {
      UserDropdownCommand(command) {
        switch (command) {
          case 'profile':
            this.$router.push('/u-center');
            break;

          case 'draft':
            this.$router.push('/u-center');
            break;
        }
      }
    }
  }
</script>

<style scoped>
  .logo {
    height: 40px;
  }
  .el-select {
    width: 80px;
  }
  .el-nav {
    position: fixed;
    width: 100%;
    z-index: 199;
  }
  .no-active-mark {
    border-bottom: 0 !important;
  }
</style>

<style>
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>