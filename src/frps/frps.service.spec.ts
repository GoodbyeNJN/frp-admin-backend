import { Test, TestingModule } from '@nestjs/testing';
import { FrpsService } from './frps.service';

describe('FrpsService', () => {
  let service: FrpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrpsService],
    }).compile();

    service = module.get<FrpsService>(FrpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
