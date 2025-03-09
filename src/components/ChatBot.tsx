import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { ChatMessage } from "../models/ChatMessage";
import { sendMessageToAPI } from "../controllers/chatController";

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([
            {
                id: 'initial',
                type: 'bot',
                content: "Hi! I'm your shopping assistant. How can I help you today?",
                timestamp: new Date(),
            }
        ]);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSendMessage = async () => {
        if (!message.trim() || isLoading) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: message.trim(),
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setIsLoading(true);

        const botResponse = await sendMessageToAPI(userMessage.content);
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                aria-label="Open chat"
            >
                <MessageCircle className="h-6 w-6" />
            </button>

            {isOpen && (
                <div className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl max-h-[600px] flex flex-col">
                    <div className="flex justify-between items-center p-4 border-b">
                        <div className="flex items-center">
                            <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                            <h3 className="font-semibold">Shopping Assistant</h3>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close chat"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${
                                        msg.type === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    {msg.content}
                                    <div className={`text-xs mt-1 ${
                                        msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                                    }`}>
                                        {msg.timestamp.toLocaleTimeString()}
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 rounded-lg p-3 animate-pulse">
                                    Typing...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Type your message..."
                                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isLoading}
                                className={`px-4 py-2 rounded-lg flex items-center ${
                                    isLoading
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'
                                } text-white transition-colors`}
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
