const mongoose = require('mongoose');
const path = require('path');


const CONFIG = require(path.join(path.resolve(__dirname), '..', 'config'));

const HOST = CONFIG.database.host;
const DABA = CONFIG.database.daba;
const PARA = CONFIG.database.para;
const USER = CONFIG.database.user;
const PSWD = CONFIG.database.pswd;

const DB_URL = 'mongodb+srv://' + USER + ':' + PSWD + '@' + HOST + DABA + '?' + PARA;

mongoose.connect(DB_URL, {useNewUrlParser: true, useCreateIndex: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('database ok')
});

module.exports = mongoose;
