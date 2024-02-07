const express = require('express');
const app = express();
const cors= require('cors');

const todoRoute = require('./routes/todoRoute')

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use('/todo',todoRoute)

app.listen(8000, () =>  {
     console.log('server is listening on port 8000');
})