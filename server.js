const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {todos} = require('./todos');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    res.send({
        todos
    });
});

app.get('*', (req, res) => {
    res.status(404).send('Please use the /todos route');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});