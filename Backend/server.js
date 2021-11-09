const express = require('express');
const app = express();
const router = require('./routes/api/router')
const cors = require('cors');

app.use(cors({
    exposedHeaders: 'Authorization',
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', router)

const PORT = process.env.port || 3001;

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`)
})