const express = require('express');
const app = express();

app.listen(3001,()=>console.log('Servidor levantado en 3001'));

app.get('/',(req, res)=> res.send('Hello World!'));