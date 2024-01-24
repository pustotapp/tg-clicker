import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from '../game/game.module';
import { MintModule } from '../mint/mint.module';
import { ScoreModule } from '../score/score.module';
import { WsGateway } from './ws.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow('MONGODB_CONNECTION_URI')
      })
    }),
    MintModule,
    ScoreModule,
    GameModule
  ],
  providers: [WsGateway]
})
export class AppModule {}
