'use strict';
const express = require('express');
const cors = require('cors')
const app = express();
const router = require('./router.js');
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});