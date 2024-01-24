import Image = Phaser.GameObjects.Image;
import { Scene } from 'phaser';
import { SCENE_LEFT_TOP } from '../constants';

export class Background extends Image {
  static componentName = 'background';

  constructor(scene: Scene) {
    super(scene, ...SCENE_LEFT_TOP, Background.componentName);

    this.setScale(0.35, 0.35);
    this.postFX.addBlur(2, 0.5, 0.5, 1);
  }
}
