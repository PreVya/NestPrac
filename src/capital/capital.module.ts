import { Module } from '@nestjs/common';
import { CapitalService } from './capital.service';
import { CapitalController } from './capital.controller';

@Module({
  controllers: [CapitalController],
  providers: [CapitalService],
})
export class CapitalModule {}
