import { Module } from '@nestjs/common';
import { TelegramModule } from '../telegram/telegram.module';
import { GameService } from './game.service';

@Module({
  imports: [TelegramModule.register()],
  providers: [GameService]
})
export class GameModule {}
