import express from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';

const app = express();

app.use(cookieParser());

app.use('/api', routes);

// Handler Not Found error
app.use(notFoundHandler);

// Handle Application Error
app.use(errorHandler);

export default app;
