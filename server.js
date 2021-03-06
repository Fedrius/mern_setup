const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// app.get('/', (req,res) => {
//     res.send('<h1>apps working. now with pod racing!</h1>')
// });

app.get('/test-route', (req,res) => {
    console.log('where will you seee this...in the terminal');
    res.send('<h1>wwwwwwwow</h1>')
});

app.get('/api/get-user', (req,res) => {
    res.send({username: 'Bob', email: 'bob@bob.com', name:'booby'})
});

app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
});

app.get('/api/get-articles', (req,res) => {
    res.send(['article1','article2'])
});



app.listen(PORT, () => {
    console.log('app running on port:' + PORT);
});