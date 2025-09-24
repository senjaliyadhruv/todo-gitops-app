const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('frontend'));
app.use('/api', require('./backend/server')); // Proxy API
app.listen(3000, () => console.log('App on 3000'));
