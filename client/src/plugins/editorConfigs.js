import hljs from 'highlight.js'
import { Quill } from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module-withfix'
Quill.register('modules/ImageResize', ImageResize);

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'align': [] }],
  ['image'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, false] }],

  [{ 'color': [] }],          // dropdown with defaults from theme
];

const editorConfigFull = {
  placeholder: '点击此处输入内容...',
  modules: {
    toolbar: toolbarOptions,
    ImageResize: {
      modules: [ 'Resize', 'DisplaySize' ]
    },
    syntax: {
      highlight: text => hljs.highlightAuto(text).value
    }
  },
};

export default editorConfigFull;