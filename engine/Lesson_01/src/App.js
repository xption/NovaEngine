console.log("App...");

const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

// 获取设备像素比
const dpr = window.devicePixelRatio || 1;

// 获取 CSS 样式宽高
const cssWidth = Math.floor(window.innerWidth / 2); // CSS 宽度是屏幕宽度的一半
const cssHeight = Math.floor(window.innerHeight / 2); // CSS 高度是屏幕高度的一半

// 设置逻辑宽高（绘图表面分辨率）
canvas.width = cssWidth * dpr;
canvas.height = cssHeight * dpr;

// 设置 CSS 显示宽高（屏幕显示大小）
canvas.style.width = `${cssWidth}px`;
canvas.style.height = `${cssHeight}px`;

// 缩放上下文，适配逻辑分辨率与显示分辨率
context.scale(dpr, dpr);

// 绘制测试内容
context.fillStyle = 'lightblue';
context.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

context.fillStyle = 'red';
context.font = '20px Arial';
context.fillText('Hello, Canvas!', 10, 30);

// 窗口大小变化时重新适配
window.addEventListener('resize', () => {
  const newCssWidth = Math.floor(window.innerWidth / 2);
  const newCssHeight = Math.floor(window.innerHeight / 2);

  // 更新逻辑宽高
  canvas.width = newCssWidth * dpr;
  canvas.height = newCssHeight * dpr;

  // 更新 CSS 宽高
  canvas.style.width = `${newCssWidth}px`;
  canvas.style.height = `${newCssHeight}px`;

  // 重新缩放上下文
  context.scale(dpr, dpr);

  // 重新绘制内容
  context.fillStyle = 'lightblue';
  context.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);

  context.fillStyle = 'red';
  context.font = '20px Arial';
  context.fillText('Canvas Resized & Centered!', 10, 30);
});