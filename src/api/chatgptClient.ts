import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function askChatGPT(question: string): Promise<string> {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: question }
            ],
        });

        return response.choices[0].message.content || "No response received";
    } catch (error) {
        console.error('Error calling ChatGPT:', error);
        throw new Error('Failed to get response from ChatGPT');
    }
} 