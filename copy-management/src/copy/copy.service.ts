import { Injectable } from '@nestjs/common';
import { CreateCopyDto } from './dto/create-copy.dto';
import { UpdateCopyDto } from './dto/update-copy.dto';
import { Copy } from './entities/copy.entity';

@Injectable()
export class CopyService {
  static copies: Copy[] = [];

  create(createCopyDto: CreateCopyDto) {
    const newCopy = new Copy();
    newCopy.name = createCopyDto.name;
    newCopy.id = Math.random();
    CopyService.copies.push(newCopy);

    return newCopy.id;
  }

  findAll() {
    return `This action returns all copy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} copy`;
  }

  update(id: number, updateCopyDto: UpdateCopyDto) {
    return `This action updates a #${id} copy`;
  }

  remove(id: number) {
    return `This action removes a #${id} copy`;
  }
}
