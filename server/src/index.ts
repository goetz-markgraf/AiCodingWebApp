import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ChatGPT proxy endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: question }
            ],
        });

        const answer = response.choices[0].message.content;
        res.json({ answer });
    } catch (error) {
        console.error('Error calling ChatGPT:', error);
        res.status(500).json({ error: 'Failed to get response from ChatGPT' });
    }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 