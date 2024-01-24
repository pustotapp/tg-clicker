import { Scene } from 'phaser';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants';
import Text = Phaser.GameObjects.Text;

export class BoostButton extends Text {
  constructor(scene: Scene) {
    const height = 50;
    const width = SCENE_WIDTH / 2;

    super(scene, width, SCENE_HEIGHT - height, 'BOOST', { fontFamily: 'Bungee' });

    this.setOrigin(0)
      .setPadding(10, 10, 10, 10)
      .setStyle({ backgroundColor: 'rgb(222,63,63)' })
      .setInteractive({ useHandCursor: true })
      .setFontSize(21)
      .setDisplaySize(SCENE_WIDTH / 2, height);
  }
}
