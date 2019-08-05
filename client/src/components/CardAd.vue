<template>
  <el-card :body-style="style" shadow="none">
    <div class="card-ad-content">
      <span>广告</span>
    </div>
    <div class="card-title">
      <h4>{{ title }}</h4>
    </div>
  </el-card>
</template>

<script>
  export default {
    data:() => ({
      title: 'Unity 2019.2 正式发布!',
      style: {
        padding: '0px',
        backgroundImage: 'url("https://unity.com/sites/default/files/styles/16_9_m/public/2019-07/SIGGRAPH-realtime-heretic-2.jpg?itok=CUCtBiMx")',
        height: '180px',
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        cursor: 'pointer'
      },
      link: 'https://unity.com'
    })
  }
</script>

<style scoped>
  .card-title {
    background-color: rgba(48,48,48,0.5);
    color: whitesmoke;
    padding: 20px;
    display: flex;
    align-items: flex-end;
  }
  .card-ad-content {
    color: whitesmoke;
  }
</style>