import { Arbuz } from '../components/arbuz';
import { Background } from '../components/background';
import { BoostButton } from '../components/boost-button';
import { LeaderBoardButton } from '../components/leader-board-button';
import { Score } from '../components/score';
import { socketClient } from '../socket-client/socket-client';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'game', active: false, visible: false });
  }

  preload() {
    this.load.image(Background.componentName, './assets/images/background.png');
    this.load.image(Arbuz.componentName, './assets/images/watermelon.png');
  }

  create() {
    const background = new Background(this);
    const arbuz = new Arbuz(this);
    const score = new Score(this);
    const leaderBoardButton = new LeaderBoardButton(this);
    const boostButton = new BoostButton(this)

    this.add.existing(background);
    this.add.existing(arbuz);
    this.add.existing(score);
    this.add.existing(leaderBoardButton);
    this.add.existing(boostButton);

    socketClient.on('score-updated', (event) => {
      score.setValue(event.value)
    })

    arbuz.onClick(async (event) => {
      socketClient.send(event.type, event);
    });

    leaderBoardButton.onClick(() => {
      this.scene.switch('leaderboard');
    })
  }
}
