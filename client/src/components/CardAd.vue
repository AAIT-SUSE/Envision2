<template>
<!--  <el-card :body-style="style" shadow="none">-->
<!--    <div class="card-ad-content">-->
<!--      <span>广告</span>-->
<!--    </div>-->
<!--    <div class="card-title">-->
<!--      <h4><a href="">{{ title }}</a></h4>-->
<!--    </div>-->
<!--  </el-card>-->
  <div class="a-container" @click="HandleAdRedirect">
    <div class="a-helper">
      <span>广告</span>
    </div>
    <div class="a-title">
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    data:() => ({
      title: 'Unity 2019.2 正式发布!',
      imgSrc: 'https://unity.com/sites/default/files/styles/16_9_m/public/2019-07/SIGGRAPH-realtime-heretic-2.jpg?itok=CUCtBiMx',
      link: 'https://unity.com',
    }),
    methods: {
      HandleAdRedirect() {
        if(this.link && this.link !== '') {
          window.location = this.link;
        }
      }
    },
    mounted() {
      let container = document.getElementsByClassName("a-container")[0];
      container.style.backgroundImage = `url(${this.imgSrc})`;
    }
  }
</script>

<style scoped>
  .a-container {
    height: 180px;
    display: grid;
    grid-template-rows: 1fr 16px;
    grid-template-columns: 1fr;
    grid-template-areas: "title"
                         "helper";
    color: #fff;
    /*background-image: url("https://unity.com/sites/default/files/styles/16_9_m/public/2019-07/SIGGRAPH-realtime-heretic-2.jpg?itok=CUCtBiMx");*/
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .a-helper {
    grid-area: helper;
    font-size: 12px;
  }
  .a-title {
    grid-area: title;
    align-self: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>