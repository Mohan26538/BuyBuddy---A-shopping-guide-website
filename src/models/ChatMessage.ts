export interface ChatMessage {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
}
