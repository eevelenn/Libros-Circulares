import { Injectable } from '@nestjs/common';
import { CreateEditionDto } from './dto/create-edition.dto';
import { UpdateEditionDto } from './dto/update-edition.dto';
import { Edition } from './entities/edition.entity';

@Injectable()
export class EditionService {
  static editions: Edition[] = [];

  create(createEditionDto: CreateEditionDto) {
    const newEdition = new Edition();
        newEdition.id = Math.random();
        newEdition.year = createEditionDto.year;
        newEdition.book = createEditionDto.book;
        newEdition.publisher = createEditionDto.Publisher;
        EditionService.editions.push(newEdition);
    
        return newEdition.id;
  }

  findAll() {
    return `This action returns all edition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} edition`;
  }

  update(id: number, updateEditionDto: UpdateEditionDto) {
    return `This action updates a #${id} edition`;
  }

  remove(id: number) {
    return `This action removes a #${id} edition`;
  }
}
