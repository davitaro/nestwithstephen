import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {

  ///DO NOT DO THIS ON REAL APP
  //INSTEAD USE DEPENDENCY INJECTION
  
  messagesService: MessagesService;
  constructor() {
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() createMessageDto: CreateMessageDto) {
    const { content } = createMessageDto;
    return this.messagesService.createMessage(content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
