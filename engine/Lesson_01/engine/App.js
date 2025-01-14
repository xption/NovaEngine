export class NVApp {
  canvas = null;
  ctx = null;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    // 设置 canvas 的逻辑宽高
    this.updateCanvasSize();
    window.addEventListener("resize", () => this.updateCanvasSize(), false);
  }

  run() {
    // 开始帧循环
    window.requestAnimationFrame(this.update);
  }

  update = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.draw();

    window.requestAnimationFrame(this.update);
  }

  draw() {
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.canvas.width / 2, 100);

    this.ctx.fillStyle = 'red';
    this.ctx.font = '20px Arial';
    this.ctx.fillText('size: ' + this.canvas.width + ' : ' + this.canvas.height, 0, 230);
  }

  // 设置 canvas 的逻辑宽高
  updateCanvasSize() {
    const canvasRect = this.canvas.getBoundingClientRect();
    this.canvas.width = canvasRect.width;
    this.canvas.height = canvasRect.height;
  }
}