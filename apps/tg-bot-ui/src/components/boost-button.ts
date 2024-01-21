import { Scene } from 'phaser';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants';
import Text = Phaser.GameObjects.Text;

export class BoostButton {
  private height = 50;
  private width = SCENE_WIDTH / 2
  private component: Text;

  constructor(scene: Scene) {
    this.component = scene.add.text(SCENE_WIDTH/2, SCENE_HEIGHT - this.height, 'BOOST', { fontFamily: 'Bungee' })
      .setOrigin(0)
      .setPadding(10, 10, 10, 10)
      .setStyle({ backgroundColor: 'rgb(222,63,63)' })
      .setInteractive({ useHandCursor: true })
      .setFontSize(21)
      .setDisplaySize(SCENE_WIDTH/2, this.height)
      .on('pointerdown', () => { scene.scene.switch('boost') })
  }
}
