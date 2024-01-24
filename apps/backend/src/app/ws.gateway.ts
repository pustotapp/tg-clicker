import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway
} from '@nestjs/websockets';
import { Socket } from 'net';
import { MintService } from '../mint/mint.service';
import { ScoreService } from '../score/score.service';

@WebSocketGateway({
  path: '/events',
  cors: true
})
export class WsGateway implements OnGatewayConnection {
  constructor(
    private readonly mintService: MintService,
    private readonly scoreService: ScoreService
  ) {
  }

  @SubscribeMessage('minted')
  public async handleMessage(@ConnectedSocket() client: Socket, @MessageBody() message: any) {
    const result = await this.mintService.createFromEvent(message);
    const score = await this.scoreService.updateFor(result.owner.id);

    client.emit('score-updated', score);
  }

  @SubscribeMessage('request')
  public async handleRequest(@ConnectedSocket() client: Socket, @MessageBody() message: any) {
    const { requestId, type, payload } = message;
    const responseEventName = `response/${requestId}`;

    switch (type) {
      case 'leaderboard':
        const result = await this.scoreService.getLeaders(10);

        client.emit(responseEventName, result);

        return;
      default:
        client.emit(responseEventName, { error: 'not found' });
        return;
    }
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log('connection');
    client.emit('hello', 'world');
  }
}
