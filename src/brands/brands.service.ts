import { Injectable } from '@nestjs/common';
import { CreateBrandsDto } from './dto/create-brands.dto';
import { UpdateBrandsDto } from './dto/update-brands.dto';

@Injectable()
export class BrandsService {
  create(createBrandsDto: CreateBrandsDto) {
    return 'This action adds a new Brands';
  }

  findAll() {
    return `This action returns all Brands`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Brands`;
  }

  update(id: number, updateBrandsDto: UpdateBrandsDto) {
    return `This action updates a #${id} Brands`;
  }

  remove(id: number) {
    return `This action removes a #${id} Brands`;
  }
}
