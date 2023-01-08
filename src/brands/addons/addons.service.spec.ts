import { Test, TestingModule } from '@nestjs/testing';
import { AddonService } from './addons.service';
import { AddonModel } from '../../database/models/addon.model';

describe('AddonService', () => {
  let service: AddonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{ provide: 'Addon_Service', useValue: {} }],
    }).compile();

    service = module.get<AddonService>(AddonService);
  });
  it('should get a All Addon by brandId', async () => {
    const brandId = 1; //BrandId belong to a Bser
    const addonId = 2; //AddonId belonging to a Brand
    const addon = await service.findSingleAddon(brandId, addonId);
    expect(addon).toBeInstanceOf(AddonModel);
    expect(service).toBeDefined();
  });

  it('should get a single Addon by brandId and addonId', async () => {
    const brandId = 1; //BrandId belong to a Bser
    const addon = await service.findAddonsByBrandId(brandId);
    expect(addon).toBeInstanceOf([AddonModel]);
    expect(service).toBeDefined();
  });
  it('should get a single Addon by brandId and addonId', async () => {
    const brandId = 1; //BrandId belong to a Bser
    const addon = await service.findAddonsByBrandId(brandId);
    expect(addon).toBeInstanceOf([AddonModel]);
    expect(service).toBeDefined();
  });
});
