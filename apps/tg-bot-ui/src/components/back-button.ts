import { Scene } from 'phaser';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants';
import Text = Phaser.GameObjects.Text;

export class BackButton {
  private height = 50;
  private width = SCENE_WIDTH / 2
  private component: Text;

  constructor(scene: Scene) {
    this.component = scene.add.text(0, SCENE_HEIGHT - this.height, '< BACK', { fontFamily: 'Bungee' })
      .setOrigin(0)
      .setPadding(10, 10, 10, 10)
      .setStyle({ backgroundColor: 'rgb(222,63,63)' })
      .setInteractive({ useHandCursor: true })
      .setFontSize(21)
      .setDisplaySize(this.width, this.height)
      .on('pointerdown', () => {
        scene.scene.switch('game')
      })
    // .on('pointerover', () => startButton.setStyle({ fill: '#f39c12' }))
    // .on('pointerout', () => startButton.setStyle({ fill: '#FFF' }))
  }
}
