/************************************************************
 * 初始化 canvas 元素
 ************************************************************/
const canvas = document.getElementById('main-canvas');
const context = canvas.getContext('2d');

const canvasRect = canvas.getBoundingClientRect();
canvas.width = canvasRect.width;
canvas.height = canvasRect.height;

/************************************************************
 * 绘制内容
 ************************************************************/
context.fillStyle = 'lightblue';
context.fillRect(0, 0, canvas.width, canvas.height);

context.fillStyle = 'blue';
context.fillRect(0, 0, canvas.width / 2, 100);

context.fillStyle = 'red';
context.font = '20px Arial';
context.fillText('size: ' + canvas.width + ' : ' + canvas.height, 0, 230);

const image = new Image();
image.src = "res/hero.png";
image.onload = () => {
  context.drawImage(image, canvas.width / 2, 100, image.width, image.height);
}

/************************************************************
 * 窗口大小变化
 ************************************************************/
window.addEventListener('resize', () => {
  const canvasRect = canvas.getBoundingClientRect();
  canvas.width = canvasRect.width;
  canvas.height = canvasRect.height;
  console.log("canvas size:", canvasRect.width, canvasRect.height);
  
  /************************************************************
   * 重新绘制测试内容
   ************************************************************/
  context.fillStyle = 'lightblue';
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.fillStyle = 'blue';
  context.fillRect(0, 0, canvas.width / 2, 100);
  
  context.fillStyle = 'red';
  context.font = '20px Arial';
  context.fillText('size: ' + canvas.width + ' : ' + canvas.height, 0, 230);
  
  const image = new Image();
  image.src = "res/hero.png";
  image.onload = () => {
    context.drawImage(image, canvas.width / 2, 100, image.width, image.height);
  }
});