const express = require('express');
const app = express();

app.listen(2323, (err) => {
    if(err) console.log(err);
    else console.log('server on 2323');
})