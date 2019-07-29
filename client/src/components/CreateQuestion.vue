<template>
  <div class="question-creation-container">
    <el-form label-width="80px" class="question-creation-info">
      <el-row>
        <el-col :span="10">
          <el-form-item label="问题标题">
            <el-input v-model="question.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item label="话题标签">
            <el-tag
              :key="tag"
              v-for="tag in question.topicTags"
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
              v-if="!inputVisible && question.topicTags.length < 5"
              class="button-new-tag" size="small" @click="showInput">+ 话题标签</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <quill-editor v-model="question.content" :options="config" class="editor-large"></quill-editor>

    <div class="creation-control">
      <el-button type="primary" size="small">发表问题</el-button>
      <el-button size="small">保存草稿</el-button>
    </div>
  </div>
</template>

<script>
  import editorConfigFull from '../plugins/editorConfigs'

  export default {
    data:() => ({
      config: editorConfigFull,
      question: {
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
        this.question.topicTags.splice(this.question.topicTags.indexOf(tag), 1);
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
          this.question.topicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      uploadSuccess(res, file) {
        this.question.titleImageUrl = URL.createObjectURL(file.raw);
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
</style>