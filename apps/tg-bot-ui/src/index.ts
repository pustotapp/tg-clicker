import "phaser";
import GameScene from "./scenes/GameScene";
import { SCENE_HEIGHT, SCENE_WIDTH } from './constants';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: SCENE_WIDTH,
  height: SCENE_HEIGHT,
  zoom: 1,
  input: {
    mouse: true
  },
  render: {
    pixelArt: true,
    antialias: false,
    antialiasGL: false,
  },
  scene: [GameScene],
};

window.addEventListener("load", () => new Phaser.Game(config));
