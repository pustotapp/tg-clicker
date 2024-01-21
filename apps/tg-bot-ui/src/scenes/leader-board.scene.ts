import { BackButton } from '../components/back-button';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super({ key: 'leaderboard', active: false, visible: false });
  }

  create() {
    const backButton = new BackButton(this)
  }
}
