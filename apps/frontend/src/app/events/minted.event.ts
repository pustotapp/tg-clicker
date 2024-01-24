import { User } from './user';

export type MintedEvent = Readonly<{
  sid: string;
  type: 'minted';
  value: number;
  date: Date;
  owner: User;
}>
