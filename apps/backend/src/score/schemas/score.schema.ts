import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Owner, OwnerSchema } from '../../common/schemas/owner.schema';

export type ScoreDocument = HydratedDocument<Score>;

@Schema({ timestamps: true })
export class Score {
  @Prop({ type: OwnerSchema, required: true })
  owner!: Owner;

  @Prop()
  value!: number;
}

export const ScoreSchema = SchemaFactory.createForClass(Score);
