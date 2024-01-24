import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MintModule } from '../mint/mint.module';
import { Score, ScoreSchema } from './schemas/score.schema';
import { ScoreService } from './score.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Score.name,
        schema: ScoreSchema
      }
    ]),
    MintModule
  ],
  providers: [ScoreService],
  exports: [ScoreService]
})
export class ScoreModule {
}
