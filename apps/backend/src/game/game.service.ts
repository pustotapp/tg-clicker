import { Injectable, OnModuleInit } from '@nestjs/common';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class GameService implements OnModuleInit {
  constructor(
    private readonly telegramService: TelegramService
  ) {
  }

  public onModuleInit() {
    this.telegramService.listen();
  }
}
