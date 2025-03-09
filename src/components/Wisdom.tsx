import { useState } from 'react';
import { useChatGPT } from '../hooks/useChatGPT';

export const Wisdom = () => {
    const [question, setQuestion] = useState('');
    const { response, isLoading, error, askQuestion } = useChatGPT();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim()) {
            await askQuestion(question);
        }
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask me anything..."
                        className="w-full p-2 border rounded-md"
                        disabled={isLoading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {isLoading ? 'Thinking...' : 'Ask ChatGPT'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

            {response && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    {response}
                </div>
            )}
        </div>
    );
};