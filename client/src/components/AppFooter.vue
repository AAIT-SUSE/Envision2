<template>
  <el-container class="footer-wrapper">
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <div class="footer-col" style="float: left">
          <h4>链接</h4>
          <a v-for="link in quickLinks" :key="link.text" :href="link.src">{{ link.text }}</a>
        </div>
        <div class="footer-col" style="float: left">
          <h4>社区</h4>
          <a v-for="link in communityLinks" :key="link.text" :href="link.src">{{ link.text }}</a>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="footer-right-col" style="float: right">
          <h4>Envision</h4>
          <p>
            Envision 是人工智能技术协会开发的用于交流技术心得、分享学习经验、记录生活灵感的Web应用。它
            <el-tooltip effect="dark" content="服务器API与加密部分闭源，以保障系统安全性" placement="top-end"><i>部分开源 <sup>*</sup></i></el-tooltip>
            并完全免费，由志愿者进行无偿开发和维护。
          </p>
          <p style="font-size: 12px; text-align: right">SUSE-AAIT &copy; 2019 ALL RIGHTS RESERVED.<br>
            FOUNDED by <el-tooltip content="^_^" :visible-arrow="false"><span> OWEN TSAI </span></el-tooltip>
          </p>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  export default {
    data: () => ({
      quickLinks: [
        {
          text: '四川轻化工大学',
          src: 'http://www.suse.edu.cn'
        },
        {
          text: '自动化与信息工程学院',
          src: 'http://zxxy.suse.edu.cn'
        },
        {
          text: '四川省人工智能重点实验室',
          src: 'http://rgzn.suse.edu.cn/'
        },
        {
          text: 'Big Corner - 大角落',
          src: 'http://www.aait-suse.cn/OwenTsai'
        },
        {
          text: 'Envision 管理平台',
          src: '#'
        },
      ],
      communityLinks: [
        {
          text: 'Envision 使用说明',
          src: '#'
        },
        {
          text: '贡献指南',
          src: '#'
        },
        {
          text: '意见或建议',
          src: '#'
        },
        {
          text: '联系我们',
          src: 'mailto:owentsai.v@gmail.com'
        },
        {
          text: '加入我们',
          src: '#'
        },
        {
          text: 'Github 代码仓库',
          src: 'https://github.com/'
        },
        {
          text: '人工智能技术协会 Github 主页',
          src: 'https://github.com/AAIT-SUSE'
        },
      ]
    })
  }
</script>

<style scoped>
  .footer-wrapper {
    background-color: #f7fbfd;
    margin: 0;
    padding: 30px 80px;
    min-height: 250px;
  }
  .footer-col {
    display: inline-block;
    padding: 0 40px;
  }

  a {
    display: block;
    font-size: 14px;
    line-height: 1.7;
    text-decoration: none;
    color: #606266;
  }
  a:hover {
    color: #409eff;
    font-weight: 700;
    cursor: pointer;
  }
  .footer-right-col > p {
    color: #909399;
    font-size: 14px;
    text-align: left;
  }
</style>