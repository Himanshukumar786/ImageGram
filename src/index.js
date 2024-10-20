import express from 'express';
import connectDB from './config/dbconfig.js';
import { createPost } from './controllers/postController.js';
import upload from './config/multerConfig.js'


const PORT = 3000; // PORT number

const app = express(); // create express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get('/ping', (req, res) => {
    console.log(req.query);
    console.log(req.body);
});

app.post('/posts', upload.single('image'), createPost);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
}); 