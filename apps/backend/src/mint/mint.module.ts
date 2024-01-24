import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MintService } from './mint.service';
import { Mint, MintSchema } from './schemas/mint.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Mint.name,
      schema: MintSchema
    }
  ])],
  providers: [MintService],
  exports: [MintService]
})
export class MintModule {
}
