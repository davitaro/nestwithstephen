import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  //Service is creating its own dependencies!
  //DO NOT DO THIS IN REAL APPS

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  createMessage(content: string) {
    return this.messagesRepo.create(content);
  }
}
