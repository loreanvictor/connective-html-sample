import { Renderer } from '@connectv/html';

const renderer = new Renderer();

renderer.render(
  <div>
    Hellow World!
  </div>
).on(document.body);