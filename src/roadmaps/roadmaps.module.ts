import { Module } from '@nestjs/common';
import { RoadmapsService } from './roadmaps.service';
import { RoadmapsController } from './roadmaps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadmapEntity } from './entities/roadmap.entity';

@Module({
  controllers: [RoadmapsController],
  providers: [RoadmapsService],
  imports: [TypeOrmModule.forFeature([RoadmapEntity])],
})
export class RoadmapsModule {}
