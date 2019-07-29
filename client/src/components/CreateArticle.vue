<template>
  <div class="article-creation-container">
    <el-form label-width="80px" class="article-creation-info">
      <el-row>
        <el-col :span="10">
          <el-form-item label="文章标题">
            <el-input v-model="article.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item label="话题标签">
            <el-tag
              :key="tag"
              v-for="tag in article.topicTags"
              closable
              :disable-transitions="true"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button
              v-if="!inputVisible && article.topicTags.length < 5"
              class="button-new-tag" size="small" @click="showInput">+ 话题标签</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="文章封面">
            <el-upload
              class="article-cover-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-success="uploadSuccess"
              :show-file-list="false">
              <el-image v-if="article.titleImageUrl" :src="article.titleImageUrl" class="article-cover" fit="cover"></el-image>
              <i v-else class="el-icon-plus article-cover-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <quill-editor v-model="article.content" :options="config"></quill-editor>

    <div class="creation-control">
      <el-button type="primary" size="small">上传文章</el-button>
      <el-button size="small">保存草稿</el-button>
    </div>
  </div>
</template>

<script>
  import editorConfigFull from '../plugins/editorConfigs'

  export default {
    data:() => ({
      config: editorConfigFull,
      article: {
        title: '',
        content: '',
        topicTags: [],
        titleImageUrl: ''
      },
      inputVisible: false,
      inputValue: ''
    }),
    methods: {
      handleClose(tag) {
        this.article.topicTags.splice(this.article.topicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.article.topicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      uploadSuccess(res, file) {
        this.article.titleImageUrl = URL.createObjectURL(file.raw);
      },
    }
  }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .article-cover-uploader {
    width: 550px;
  }
  .article-cover-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    line-height: 200px;
    text-align: center;
  }
  .article-cover {
    height: 200px;
    display: block;
  }
  .creation-control {
    text-align: right;
  }
</style>

<style>
  .ql-container {
    min-height: 500px;
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
  .article-cover-uploader .el-upload {
    width: 100%;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .article-cover-uploader .el-upload:hover {
    border-color: #409EFF;
  }
</style>