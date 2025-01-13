console.log("App...");

const canvas = document.getElementById("main-canvas");

// canvas 在屏幕上的实际宽高
const canvasRect = canvas.getBoundingClientRect();
const width = canvasRect.width;
const height = canvasRect.height;
console.log("屏幕宽高", width, height);

// 设置 canvas 的逻辑宽高
canvas.width = width;
canvas.height = height;

// 绘制图片
const ctx = canvas.getContext("2d");

const imageWidth = 16;
const imageHeight = 16;

const image00 = new Image();
image00.src = "res/image/cross.png";
image00.onload = () => {
  ctx.drawImage(image00, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
}

const image01 = new Image();
image01.src = "res/image/cross.png";
image01.onload = () => {
  ctx.drawImage(image01, - imageWidth / 2, canvas.height - imageHeight / 2, imageWidth, imageHeight);
}

const image11 = new Image();
image11.src = "res/image/cross.png";
image11.onload = () => {
  ctx.drawImage(image11, width - imageWidth / 2, height - imageHeight / 2, imageWidth, imageHeight);
}

const image10 = new Image();
image10.src = "res/image/cross.png";
image10.onload = () => {
  ctx.drawImage(image10, width - imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
}