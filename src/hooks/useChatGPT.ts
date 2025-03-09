import { useState } from 'react';
import { askChatGPT } from '../api/chatgptClient';

interface ChatGPTState {
    response: string | null;
    isLoading: boolean;
    error: string | null;
}

export function useChatGPT() {
    const [state, setState] = useState<ChatGPTState>({
        response: null,
        isLoading: false,
        error: null,
    });

    const askQuestion = async (question: string) => {
        setState(prev => ({ ...prev, isLoading: true, error: null }));
        
        try {
            const response = await askChatGPT(question);
            setState(prev => ({ ...prev, response, isLoading: false }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                isLoading: false,
                error: error instanceof Error ? error.message : 'An error occurred'
            }));
        }
    };

    return {
        ...state,
        askQuestion,
    };
} 