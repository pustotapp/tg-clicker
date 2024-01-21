import { Scene } from 'phaser';
import { SCENE_LEFT_TOP } from '../constants';
import { sleep, ValueOf } from '../utils';
import Image = Phaser.GameObjects.Image;

const ArbuzStatus = {
  Updating: 'updating',
  Idle: 'idle'
};

type ArbuzStatus = ValueOf<typeof ArbuzStatus>;

export class Arbuz {
  private status: ArbuzStatus = ArbuzStatus.Idle
  private component: Image;
  private subscribers = [];

  constructor(private scene: Scene) {
    this.component = scene.add.image(...SCENE_LEFT_TOP, 'arbuz')
      .setScale(0.06, 0.06)
      .setAngle(90)
      .setInteractive();

    this.component.postFX.addGlow(0x000000, 4, 1, false, 1);

    this.component.on('pointerdown', this.update.bind(this));
  }

  private async update() {
    if (this.status !== ArbuzStatus.Idle) {
      return;
    }
    this.status = ArbuzStatus.Updating;

    this.scene.tweens.add(
      {
        targets: this.component,
        scaleX: 0.05,
        scaleY: 0.05,
        duration: 50
      }
    );

    await sleep(100);

    await Promise.all(this.subscribers.map(cb => cb()));

    this.status = ArbuzStatus.Idle;

    this.scene.tweens.add(
      {
        targets: this.component,
        scaleX: 0.06,
        scaleY: 0.06,
        duration: 50
      }
    );
  }

  addSubscription(cb) {
    this.subscribers.push(cb);
  }
}
