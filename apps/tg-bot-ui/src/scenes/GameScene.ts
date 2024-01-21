import { Score } from '../components/score';
import { SCENE_LEFT_TOP } from '../constants';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'game', active: false, visible: false });
  }

  preload() {
    this.load.image('background', './assets/images/background.png');
    this.load.image('arbuz', './assets/images/watermelon.png');
  }

  create() {
    const background = this.add.image(...SCENE_LEFT_TOP, 'background')
      .setScale(0.35, 0.35);

    background.postFX.addBlur(2, 0.5, 0.5, 1);

    const arbuz = this.add.image(...SCENE_LEFT_TOP, 'arbuz')
      .setScale(0.06, 0.06)
      .setAngle(90)
      .setInteractive();

    arbuz.postFX.addGlow(0x000000, 4, 1, false, 1);

    const score = new Score(this);

    arbuz.on('pointerdown', () => {
      this.tweens.add(
        {
          targets: arbuz,
          scaleX: 0.05,
          scaleY: 0.05,
          duration: 50,
          yoyo: true
        }
      );
      score.increment();
    });
  }
}
