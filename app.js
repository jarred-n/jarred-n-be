const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/blog',
//   {useNewUrlParser: true}
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('dist'));

app.use('/api', article);

app.listen(3001, () => {
    console.log('listening on port 3001')
});

module.exports = app;