import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  
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
  async getMessage(@Param('id') id: string) {
    const found = await this.messagesService.findOne(id);
    console.log('found', found);
    if (!found) {
      throw new NotFoundException(`Message with id ${id} not found. Oops?`);
    }
    return found;
  }
}
