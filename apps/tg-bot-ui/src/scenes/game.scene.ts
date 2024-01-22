import { Arbuz } from '../components/arbuz';
import { BoostButton } from '../components/boost-button';
import { LeaderBoardButton } from '../components/leader-board-button';
import { Score } from '../components/score';
import { SCENE_LEFT_TOP } from '../constants';
import { App } from '../telegram';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'game', active: false, visible: false });
  }

  preload() {
    this.load.image('background', './assets/images/background.png');
    this.load.image('arbuz', './assets/images/watermelon.png');
  }

  create() {
    const background = this.add.image(...SCENE_LEFT_TOP, 'background')
      .setScale(0.35, 0.35);

    background.postFX.addBlur(2, 0.5, 0.5, 1);

    const score = new Score(this);
    const arbuz = new Arbuz(this);

    arbuz.addSubscription(() => {
      score.increment();
      App.sendData(JSON.stringify({ type: 'click' }))
    })

    const leaderBoardButton = new LeaderBoardButton(this);
    const boostButton = new BoostButton(this)
  }
}
