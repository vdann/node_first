// содежимое index.js
const http = require('http');

const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello Node.js Server! Серега гат)))');
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        console.log('something bad happened', err);
        return;
    }

    console.log(`server is listening on ${port}`);
})