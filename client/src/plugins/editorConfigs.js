import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Font from '@ckeditor/ckeditor5-font/src/font'
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn'

ClassicEditor.catch(error => console.log(error));

export default {
  data:() => ({
    editor: ClassicEditor,
    editorData: '',
    editorConfig: {
      language: 'zh-cn',
      plugins: [Font,],
      fontSize: {
        options: [8, 9, 10, 11, 12, 'default', 14, 16, 18, 20, 22, 24, 26, 28, 36, 44, 48, 72],
      },
      fontFamily: {
        options: [
          'default',
          'Ubuntu, Arial, sans-serif',
          'Ubuntu Mono, Courier New, Courier, monospace'
        ]
      },
      toolbar: [ 'fontFamily', 'fontSize', '|', 'link' ]
    },
  }),
}