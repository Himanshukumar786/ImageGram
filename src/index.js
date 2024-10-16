import express from 'express';
import connectDB from './config/dbconfig.js';
import { createPost } from './controllers/postController.js';

const PORT = 3000; // PORT number

const app = express(); // create express app server instance

app.get('/ping', (req, res) => {
    return res.json({message : 'Pong'});
});

app.post('/posts', createPost);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});
