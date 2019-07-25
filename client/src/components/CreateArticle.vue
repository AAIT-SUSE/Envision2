<template>
  <ckeditor :editor="editor" :config="editorConfig" v-model="editorData"></ckeditor>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import Font from '@ckeditor/ckeditor5-font/src/fontfamily';
  import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

  export default {
    name: 'app',
    data:() => ({
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        language: 'zh-cn',
        plugins: [Font,],
        fontFamily: {
          options: [
            'default',
            'Ubuntu, Arial, sans-serif',
            'Ubuntu Mono, Courier New, Courier, monospace'
          ]
        },
        toolbar: [ 'fontFamily', 'fontColor', '|', 'link' ]
      },
    }),
  }
</script>

<style scoped>

</style>