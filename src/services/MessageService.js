let __messages = [];

export class MessageService {

  static get() {
    return __messages;
  }

  static add(message) {
     __messages.push(message);
  }

  static clear() {
    __messages = [];
    // __messages.length = 0;
  }
}