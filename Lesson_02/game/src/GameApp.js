import { NVApp } from "../../engine/App.js";

export class GameApp extends NVApp {
  constructor(canvas) {
    super(canvas);
  }

  init() {
    super.init();
  }

  update() {
    this.timeString = "GameApp 计算的时间：" + new Date().toLocaleTimeString();
  }
}