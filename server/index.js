const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const feed = require('../feed/sample.json');

app.use('/', express.static(path.join(__dirname, '../dist')))

app.get('/feed', (req, res) => {
    res.json(feed);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))