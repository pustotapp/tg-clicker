import { Scene } from 'phaser';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants';
import Text = Phaser.GameObjects.Text;

export class LeaderBoardButton extends Text {
  constructor(scene: Scene) {
    const height = 50;
    const width = SCENE_WIDTH / 2

    super(scene, 0, SCENE_HEIGHT - height, 'LEADERS', { fontFamily: 'Bungee' })

    this.setOrigin(0)
      .setPadding(10, 10, 10, 10)
      .setStyle({ backgroundColor: 'rgb(107,177,107)' })
      .setInteractive({ useHandCursor: true })
      .setFontSize(21)
      .setDisplaySize(width, height)
  }

  onClick(callback) {
    this.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, callback)
  }
}
