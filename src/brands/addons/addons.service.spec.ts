import { Test, TestingModule } from '@nestjs/testing';
import { AddonService } from './addons.service';

describe('AddonService', () => {
  let service: AddonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddonService],
    }).compile();

    service = module.get<AddonService>(AddonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
