import { Controller, NotFoundException } from '@nestjs/common';
import { Get, Post, Body, Param } from '@nestjs/common/decorators/http';
import { createMessageDto } from './DTOS/create-message.dto';
import { messagesService } from './messages.service';
@Controller('/messages')
export class MessagesController {
  constructor(public messageService: messagesService) {}

  @Get()
  getMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() Body: createMessageDto) {
    console.log(Body);
    return this.messageService.create(Body.content);
  }

  @Get('/:id')
  async getMessage(@Param() id: any) {
    const result = await this.messageService.findOne(id);

    if (!result) {
      throw new NotFoundException('Message Not Found');
    }

    return result;
  }
}
