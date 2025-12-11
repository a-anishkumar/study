import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
import studyPlanRoutes from './routes/studyPlanRoutes.js';

import authRoutes from './routes/authRoutes.js';

import { connectDB } from './config/db.js';
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/', studyPlanRoutes);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ message: 'Invalid or empty JSON body' });
    }
    next();
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});