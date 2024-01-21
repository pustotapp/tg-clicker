import { Scene } from 'phaser';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../constants';
import Text = Phaser.GameObjects.Text;

export class LeaderBoardButton {
  private height = 50;
  private width = SCENE_WIDTH / 2
  private component: Text;

  constructor(scene: Scene) {
    this.component = scene.add.text(0, SCENE_HEIGHT - this.height, 'LEADERS', { fontFamily: 'Bungee' })
      .setOrigin(0)
      .setPadding(10, 10, 10, 10)
      .setStyle({ backgroundColor: 'rgb(107,177,107)' })
      .setInteractive({ useHandCursor: true })
      .setFontSize(21)
      .setDisplaySize(this.width, this.height)
      .on('pointerdown', () => { scene.scene.switch('leaderboard') })
  }
}
