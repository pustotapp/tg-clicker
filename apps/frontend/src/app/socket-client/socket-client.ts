import { io, Socket } from "socket.io-client";
import { v4 as uuid } from 'uuid';

export class SocketClient {
  private readonly client: Socket;

  constructor(private readonly url: string) {
    this.client = io(url, {
      path: "/events"
    });

    this.client.connect();
  }

  public send(type: string, message: any) {
    this.client.emit(type, message);
  }

  public on(type: string, callback) {
    this.client.on(type, callback);
  }

  public async request(type: string, payload?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const requestId = uuid();
      const eventName = `request`;
      const responseEventName = `response/${requestId}`

      this.client.once(responseEventName, resolve);
      this.client.emit(eventName, {
        type,
        requestId,
        payload
      });
    });
  }
}

export const socketClient = new SocketClient(process.env.NX_WS_BASE_URL);
