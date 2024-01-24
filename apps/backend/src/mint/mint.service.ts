import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mint } from './schemas/mint.schema';

@Injectable()
export class MintService {
  constructor(
    @InjectModel(Mint.name) private readonly mintModel: Model<Mint>
  ) {
  }

  public async createFromEvent(event: any) {
    const createdMint = new this.mintModel(event);

    return createdMint.save();
  }

  public async calculateValue(userId: number) {
    const result = await this.mintModel.aggregate([
      {
        $match: {
          'owner.id': userId
        }
      },
      {
        $group: { _id: { userId: '$owner.id' }, owner: { $first: '$owner'}, value: { $sum: '$value' } }
      },
      {
        $project: {
          _id: 0,
          owner: '$owner',
          value: '$value'
        }
      }
    ]).exec();

    return result[0];
  }
}
