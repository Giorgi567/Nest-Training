import { messagesRepository } from './message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class messagesService {
  constructor(public messRepo: messagesRepository) {}

  async findOne(id: string) {
    return this.messRepo.findOne(id);
  }

  async findAll() {
    return this.messRepo.findAll();
  }

  async create(content: string) {
    return this.messRepo.create(content);
  }
}
