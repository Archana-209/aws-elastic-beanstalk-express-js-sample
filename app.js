const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Welcome To Edureka! Learning Center
Cloud&DEvOps - Mini-Project 
CodePipeline Using AWS'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
