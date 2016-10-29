export class Message {
    messageId: string;
    userId: string;
    content: string;
    username: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.messageId = messageId;
        this.userId = userId;
        this.content = content;
        this.username = username
    }
}