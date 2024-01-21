import { Scene } from 'phaser';
import Text = Phaser.GameObjects.Text;

export class Score {
  private value: number = 0;
  private component: Text

  constructor(scene: Scene) {
    this.component = scene.add.text(0, 0, `SCORE: ${this.value}`, { fontFamily: 'Bungee' });
  }

  increment() {
    this.value++;
    this.component.setText(`SCORE: ${this.value}`)
  }
}
