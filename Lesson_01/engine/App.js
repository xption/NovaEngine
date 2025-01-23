export class NVApp {
  canvas = null;
  ctx = null;

  timeString = null;

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
    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop = () => {
    // 更新游戏逻辑
    this.update();

    // 绘制
    this.draw();

    window.requestAnimationFrame(this.gameLoop);
  }

  update() {
    this.timeString = new Date().toLocaleTimeString();
  }

  draw() {
    // 清理前一帧的图像
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 绘制
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(0, 0, this.canvas.width / 2, 100);

    this.ctx.fillStyle = 'red';
    this.ctx.font = '20px Arial';
    this.ctx.fillText('size: ' + this.canvas.width + ' : ' + this.canvas.height, 0, 230);

    this.ctx.fillText('当前时间: ' + this.timeString, 0, 260);
  }

  // 设置 canvas 的逻辑宽高
  updateCanvasSize() {
    const canvasRect = this.canvas.getBoundingClientRect();
    this.canvas.width = canvasRect.width;
    this.canvas.height = canvasRect.height;
  }
}