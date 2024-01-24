import { v4 as uuid } from 'uuid'
import { MintedEvent } from './minted.event';
import { User } from './user';

export class MintFactory {
  static create(owner: User, value: number): MintedEvent {
    return {
      sid: uuid(),
      type: 'minted',
      date: new Date(),
      value,
      owner,
    };
  }
}
