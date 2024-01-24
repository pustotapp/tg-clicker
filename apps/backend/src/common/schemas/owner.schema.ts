import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Owner {
  @Prop({ required: true })
  id!: number;

  @Prop()
  username?: string;

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
