const http = require('http'); // Import NOde.js core module

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log('request received');
    console.log(req);
    console.log(res);

    //send a hello world response
    if (req.url === '/') {
        res.write('home');

    }
    else if (req.url === '/about') {
        res.write('about');
    }else{
        res.write('404 Not Found');
    }
    res.end(); // end the response and tell request has been processed
});

//start the server
server.listen(PORT, () => {
    // Callback triggered when server is successfully listening
    console.log(`Server is running on http://localhost:${PORT}`);
});