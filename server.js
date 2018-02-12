const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>apps working</h1>')
});

app.get('/test-route', (req,res) => {
    console.log('where will you seee this...in the terminal');
    res.send('<h1>wwwwwwwow</h1>')
});

app.listen(PORT, () => {
    console.log('app running on port:' + PORT);
});