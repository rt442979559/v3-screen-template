import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export const hljsFn = (app: any) => {
  app.directive('highlight', function (el:any) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block);
      // 从这开始是设置行号
      block.innerHTML = `<ol><li>${block.innerHTML.replace(
        /\n/g,
        `</li><li class="line">`
      )}</li></ol>`;
    });
  });
}  