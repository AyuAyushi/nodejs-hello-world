const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello world from express');
})

app.listen(3000, () => {
    console.log('hello world')
})