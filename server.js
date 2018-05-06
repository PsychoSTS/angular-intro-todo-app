const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    res.send({
        todos: [
            {
                title: 'Title',
                description: 'description'
            }
        ]
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});