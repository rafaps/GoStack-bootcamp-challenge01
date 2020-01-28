const express = require('express');
const server = express();

server.use(express.json());



server.get('/', (req, res) => {
    res.json({ name: 'Diego'});

});



server.listen(3000);