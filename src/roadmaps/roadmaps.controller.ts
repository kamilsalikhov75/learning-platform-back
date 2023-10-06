import { Controller } from '@nestjs/common';
import { RoadmapsService } from './roadmaps.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('roadmaps')
@ApiTags('roadmaps')
export class RoadmapsController {
  constructor(private readonly roadmapsService: RoadmapsService) {}
}
