import { BackButton } from '../components/back-button';

export default class BoostScene extends Phaser.Scene {
  constructor() {
    super({ key: 'boost', active: false, visible: false });
  }

  create() {
    const backButton = new BackButton(this)
  }
}
