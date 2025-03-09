import { ChatMessage } from "../models/ChatMessage";

export const sendMessageToAPI = async (message: string): Promise<ChatMessage> => {
    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        return {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: data.message || "Sorry, I didn't understand that...",
            timestamp: new Date()
        };
    } catch (error) {
        console.error("Error fetching response:", error);
        return {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: "I'm sorry, I couldn't process your request. Please try again.",
            timestamp: new Date()
        };
    }
};
export default sendMessageToAPI;
