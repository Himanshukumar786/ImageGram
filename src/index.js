import express from 'express';
import connectDB from './config/dbconfig.js';

const PORT = 3000; 

const app = express(); 

app.get('/ping', (req, res) => {
    return res.json({message : 'Pong'});
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});
