export async function askChatGPT(question: string): Promise<string> {
    try {
        const response = await fetch('http://localhost:3001/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });

        if (!response.ok) {
            throw new Error('Failed to get response from server');
        }

        const data = await response.json();
        return data.answer || "No response received";
    } catch (error) {
        console.error('Error calling ChatGPT:', error);
        throw new Error('Failed to get response from ChatGPT');
    }
} 