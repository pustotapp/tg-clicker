import "phaser";
import BoostScene from './scenes/boost.scene';
import GameScene from "./scenes/game.scene";
import { SCENE_HEIGHT, SCENE_WIDTH } from './constants';
import LeaderBoardScene from './scenes/leader-board.scene';

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
  scene: [GameScene, LeaderBoardScene, BoostScene],
};

window.addEventListener("load", () => new Phaser.Game(config));
