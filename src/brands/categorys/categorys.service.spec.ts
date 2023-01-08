import { Test, TestingModule } from '@nestjs/testing';
import { CategorysService } from './categorys.service';
import { CategoryModel } from '../../database/models/addon_categories.model';

describe('CategorysService', () => {
  let service: CategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorysService, CategoryModel],
    }).compile();

    service = module.get<CategorysService>(CategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
