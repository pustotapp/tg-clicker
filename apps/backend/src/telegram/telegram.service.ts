import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import TelegramBot from 'node-telegram-bot-api';

import { TELEGRAM_MODULE_OPTIONS } from './constants';
import { TelegramModuleOptions } from './types';

@Injectable()
export class TelegramService {
  private url: string;

  constructor(
    @Inject(TELEGRAM_MODULE_OPTIONS)
    private readonly options: TelegramModuleOptions,
    private readonly httpService: HttpService
  ) {
    this.url = `https://api.telegram.org/bot${this.options.botKey}/`;
  }

  public listen() {
    const bot = new TelegramBot(this.options.botKey,
      { polling: true }
    );

    bot.on('message', (...args) => {
      console.dir(args)
    })
  }
}
