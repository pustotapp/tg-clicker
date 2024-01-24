import { Scene } from 'phaser';
import Text = Phaser.GameObjects.Text;

export class Score extends Text {
  private value: number = 0;

  constructor(scene: Scene) {
    super(scene, 0, 0, `SCORE: 0`, { fontFamily: 'Bungee' });
  }

  increment() {
    this.value++;
    this.setText(`SCORE: ${this.value}`);
  }

  setValue(value: number) {
    this.value = value;
    this.setText(`SCORE: ${this.value}`);
  }
}
