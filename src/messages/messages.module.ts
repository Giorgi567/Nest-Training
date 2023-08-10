import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { messagesService } from './messages.service';
import { messagesRepository } from './message.repository';
@Module({
  controllers: [MessagesController],
  //providers are things that can be used depedencies for other classes
  providers: [messagesRepository, messagesService],
})
export class MessagesModule {}
