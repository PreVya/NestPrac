import { Injectable } from '@nestjs/common';
import { CreateCapitalDto } from './dto/create-capital.dto';
import { UpdateCapitalDto } from './dto/update-capital.dto';

@Injectable()
export class CapitalService {
  create(createCapitalDto: CreateCapitalDto) {
    return 'This action adds a new capital';
  }

  findAll() {
    return `This action returns all capital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} capital`;
  }

  update(id: number, updateCapitalDto: UpdateCapitalDto) {
    return `This action updates a #${id} capital`;
  }

  remove(id: number) {
    return `This action removes a #${id} capital`;
  }
}
