const express = require('express');
const http = require('http');
const port  =  process.env.port || 8000; 

const app = express();
const server = http.createServer(app);

app.use('/',require('./router'));  


server.listen(port, () => {
    console.log(`server has started on port ${port}`);
} )
