import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}
  async create(createCityDto: CreateCityDto) {
    const city = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll() {
    return await this.cityRepository.find({
      relations: ['capital'],
    });
  }

  async findOne(id: string) {
    return await this.cityRepository.findOne({
      where: { id },
      relations: ['capital'],
    });
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    const city = await this.cityRepository.findOne({
      where: { id },
      relations: ['capital', 'createdAt', 'deletedAt'],
    });
    if (!city) {
      throw new NotFoundException();
    }
    Object.assign(city, updateCityDto);

    return await this.cityRepository.save(city);
  }

  async remove(id: string) {
    const city = await this.cityRepository.findOne({
      where: { id },
      relations: ['capital'],
    });
    if (!city) {
      throw new NotFoundException();
    }
    return await this.cityRepository.remove(city);
  }
}
