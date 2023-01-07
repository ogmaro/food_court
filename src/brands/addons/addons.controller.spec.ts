import { Test, TestingModule } from '@nestjs/testing';
import { AddonController } from './addons.controller';
import { AddonService } from './addons.service';

describe('AddonController', () => {
  let controller: AddonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddonController],
      providers: [AddonService],
    }).compile();

    controller = module.get<AddonController>(AddonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
