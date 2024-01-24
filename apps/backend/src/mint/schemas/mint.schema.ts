import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Owner, OwnerSchema } from '../../common/schemas/owner.schema';

export type MintDocument = HydratedDocument<Mint>;

@Schema({ timestamps: true })
export class Mint {
  @Prop({ required: true })
  sid!: string;

  @Prop({ required: true })
  value!: number;

  @Prop({ required: true })
  date!: string;

  @Prop({ type: OwnerSchema, required: true })
  owner!: Owner;
}

export const MintSchema = SchemaFactory.createForClass(Mint);
