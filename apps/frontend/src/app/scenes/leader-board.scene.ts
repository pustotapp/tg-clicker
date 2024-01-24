import { BackButton } from '../components/back-button';
import { socketClient } from '../socket-client/socket-client';
import Container = Phaser.GameObjects.Container;
import Text = Phaser.GameObjects.Text;

export default class LeaderBoardScene extends Phaser.Scene {
  private leaders: any[] = [];
  private container: Container

  constructor() {
    super({ key: 'leaderboard', active: false, visible: false });
  }

  async create() {
    const backButton = new BackButton(this)

    this.leaders = await socketClient.request('leaderboard');

    this.updateChart();

    this.events.on('wake', async () => {
      this.leaders = await socketClient.request('leaderboard');

      this.updateChart()
    })
  }

  updateChart() {
    if (this.container) {
      this.container.removeAll(true);
    } else {
      this.container = new Container(this);

      this.add.existing(this.container);
    }

    const rank = new Text(this, 30, 30, 'RANK', { fontFamily: 'Bungee' }).setTint(0xffffff);
    const score = new Text(this, 120, 30, 'SCORE', { fontFamily: 'Bungee' }).setTint(0xffffff);
    const name = new Text(this, 230, 30, 'NAME', { fontFamily: 'Bungee' }).setTint(0xffffff);

    this.container.add(rank);
    this.container.add(score);
    this.container.add(name);

    this.leaders.forEach((item, index) => {
      const rankValue = new Text(this, 30, 55 + index * 25, `${index + 1}`, { fontFamily: 'Bungee' });
      const scoreValue = new Text(this, 120, 55 + index * 25, item.value, { fontFamily: 'Bungee' });
      const nameValue = new Text(this, 230, 55 + index * 25, item.owner.firstName || 'noname', { fontFamily: 'Bungee' });

      this.container.add(rankValue);
      this.container.add(scoreValue);
      this.container.add(nameValue);
    });
  }
}
