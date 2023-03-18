const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller');
app.use(express.json());
app.post('/data', controller.putData);
app.get('/data', controller.getData);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

