import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Access environment variables using process.env.VARIABLE_NAME
// Always provide a fallback value using || operator
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'testing';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'Welcome to Express.js with TypeScript!',
    status: 'Server is running successfully',
    environment: NODE_ENV
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${NODE_ENV}`);
});

