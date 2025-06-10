import { getServerConfig } from '../config/index';
import { createApp } from './app';

const port = getServerConfig().port;
createApp().listen(port, () => {
  console.log(`AG-UI Node server listening on port ${port}`);
}); 