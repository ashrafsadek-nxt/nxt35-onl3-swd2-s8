const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/hello', (req, res) => {
    res.send('hello message without any pages');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server:- http://localhost:${PORT}`));

require('dotenv').config();


