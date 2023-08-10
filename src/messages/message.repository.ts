import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class messagesRepository {
  async findOne(id: string) {
    const content = await readFile(
      `${__dirname}../../../messages.json`,
      'utf-8',
    );
    const messages = JSON.parse(content);
    console.log(messages);
    return messages[id];
  }
  async findAll() {
    const content = await readFile(
      `${__dirname}../../../messages.json`,
      'utf-8',
    );
    const messages = JSON.parse(content);
    console.log(__dirname);
    return messages;
  }

  async create(message: string) {
    const content = await readFile(
      `${__dirname}../../../messages.json`,
      'utf-8',
    );
    const messages = JSON.parse(content);

    const id = Math.floor(Math.random() * 9999);
    const newMessage = { id, message };

    messages[id] = newMessage;

    await writeFile(
      `${__dirname}../../../messages.json`,
      JSON.stringify(messages, null, 2),
    );

    return newMessage;
  }
}
