import { Scene } from 'phaser';
import { SCENE_LEFT_TOP } from '../constants';
import { MintFactory } from '../events/mint.factory';
import { sleep, ValueOf } from '../utils';
import Image = Phaser.GameObjects.Image;

const ArbuzStatus = {
  Updating: 'updating',
  Idle: 'idle'
};

type ArbuzStatus = ValueOf<typeof ArbuzStatus>;

export class Arbuz extends Image {
  public static componentName = 'arbuz';

  private status: ArbuzStatus = ArbuzStatus.Idle;

  constructor(scene: Scene) {
    super(scene, ...SCENE_LEFT_TOP, Arbuz.componentName);

    this.setScale(0.07, 0.07)
      .setAngle(90)
      .setInteractive();

    this.postFX.addGlow(0x000000, 4, 1, false, 1);
  }

  onClick(callback) {
    this.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, async () => {
      if (this.status === ArbuzStatus.Updating) {
        return;
      }

      this.status = ArbuzStatus.Updating;
      this.scene.tweens.add({
        targets: this,
        scaleX: 0.06,
        scaleY: 0.06,
        duration: 50
      });

      const event = MintFactory.create({ id: 42 }, 1);
      await Promise.all([
        callback(event),
        sleep(100)
      ])

      this.scene.tweens.add({
        targets: this,
        scaleX: 0.07,
        scaleY: 0.07,
        duration: 50
      }).once('complete', () => {
        this.status = ArbuzStatus.Idle;
      });
    }, this);
  }
}
