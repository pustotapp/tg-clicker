import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MintService } from '../mint/mint.service';
import { Score } from './schemas/score.schema';

@Injectable()
export class ScoreService {
  constructor(
    private readonly mintService: MintService,
    @InjectModel(Score.name) private readonly scoreModel: Model<Score>
  ) {
  }

  public async updateFor(userId: number) {
    const result = await this.mintService.calculateValue(userId);

    const existing = await this.scoreModel.findOne({ 'owner.id': userId }).exec();
    if (existing) {
      const updated = await this.scoreModel.findOneAndUpdate({ 'owner.id': userId }, result).exec();

      return updated;
    } else {
      const created = new this.scoreModel(result);

      await created.save();

      return created;
    }
  }

  public async getLeaders(limit: number) {
    const result = await this.scoreModel.find({}).sort({ value: -1 }).limit(limit).exec();

    return result;
  }
}
