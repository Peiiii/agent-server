import dotenv from 'dotenv';

dotenv.config();

export interface AgentConfig {
  openaiApiKey: string;
  baseURL: string;
  model: string;
}

export function getAgentConfig(): AgentConfig {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required');
  }

  return {
    openaiApiKey: apiKey,
    baseURL: process.env.OPENAI_BASE_URL || 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    model: process.env.OPENAI_MODEL || 'qwen-max-latest',
  };
}

export interface ServerConfig {
  port: number;
}

export function getServerConfig(): ServerConfig {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT) : 8000,
  };
}

export default {
  getAgentConfig,
  getServerConfig
};