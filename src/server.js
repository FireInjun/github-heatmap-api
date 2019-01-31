'use strict';

const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes')
const PORT = process.env.PORT;


const app = require(express)
routes(app)
app.listen(PORT)