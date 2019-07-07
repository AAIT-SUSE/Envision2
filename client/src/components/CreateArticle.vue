<template>
  <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

  export default {
    name: 'app',
    data:() => ({
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        language: 'zh-cn'
      },
    }),
  }
</script>

<style scoped>

</style>