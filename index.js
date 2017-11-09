// содежимое index.js
const express = require('express');

const port = process.env.PORT || 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hello from Express!');
})

app.get('/err', (req, res) => {
    throw new Error('oops');
})

app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    response.status(500).send(err);
})

app.listen(port, (err) => {
    if (err) {
        console.log('something bad happened', err);
        return;
    }

    console.log(`server is listening on ${port}`);
})
