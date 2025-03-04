/* eslint-disable no-console */
import url from 'node:url';
import path from 'node:path';

import { config as buildConfig } from './wdio.conf.js';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

capabilities: [{
    browserName: 'chrome', // Use Chrome
    'goog:chromeOptions': { // Chrome-specific options
        args: [
            '--headless=new', // Headless mode (new optimized version)
            '--window-size=1280,800', // Window size
            '--no-sandbox', // Bypass OS security model
            '--disable-gpu', // Disable GPU hardware acceleration
            '--disable-dev-shm-usage', // Avoid issues with limited shared memory
            '--disable-infobars', // Disable Chrome's "info bar"
        ],
    },
}];

export const config = buildConfig;
