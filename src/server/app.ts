import type { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { OpenAIAgent } from '../agent/openaiAgent';
import { getAgentConfig } from '../config/index';

export const createApp = () => {
  const app = express();
  
  // 日志中间件
  app.use(morgan('dev')); // 开发环境使用 dev 格式
  app.use(cors());
  app.use(express.json());

  const agent = new OpenAIAgent(getAgentConfig());

  app.post('/openai-agent', async (req: Request, res: Response) => {
    const acceptHeader = req.headers.accept || 'application/json';
    const inputData = req.body;
    res.setHeader('Content-Type', acceptHeader);

    try {

      for await (const chunk of agent.run(inputData, acceptHeader)) {
        res.write(chunk);
      }
      res.end();
    } catch (error) {
      console.error('Error in OpenAI agent handler:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  return app;
};
