import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';

@Module({
  imports: [],
  providers: [LeaderboardService],
  exports: [LeaderboardService]
})
export class LeaderboardModule {}
