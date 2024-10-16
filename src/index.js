import express from 'express';
import connectDB from './config/dbconfig.js';
import { createPost } from './controllers/postController.js';

const PORT = 3000; // PORT number

const app = express(); // create express app server instance

app.get('/ping', (req, res) => {
    return res.json({message : 'Pong'});
});

function m1(req, res, next){
    console.log('m1');
    next();
}

function m2(req, res, next){
    console.log('m2');
    next();
}

function m3(req, res, next){
    console.log('m3');
    next();
}

app.post('/posts', m1, m2, m3, createPost);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});
