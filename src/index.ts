// Core exports
export { OpenAIAgent } from './agent/openaiAgent';
export { getAgentConfig } from './config/index';

// Types
export type { AgentConfig } from './config/index';
export type { OpenAIAgentOptions } from './agent/openaiAgent';

// Server (optional)
export { createApp } from './server/app'; 