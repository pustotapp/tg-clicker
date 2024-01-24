import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TELEGRAM_MODULE_OPTIONS } from './constants';
import { TelegramService } from './telegram.service';
import { TelegramModuleOptions } from './types';

@Module({})
export class TelegramModule {
  public static register(): DynamicModule {
    return {
      module: TelegramModule,
      imports: [ConfigModule, HttpModule.register({})],
      providers: [
        {
          inject: [ConfigService],
          provide: TELEGRAM_MODULE_OPTIONS,
          useFactory: (configService: ConfigService): TelegramModuleOptions => ({
            botKey: configService.getOrThrow('TELEGRAM_BOT_KEY')
          })
        },
        TelegramService,
      ],
      exports: [TelegramService]
    }
  }
}
