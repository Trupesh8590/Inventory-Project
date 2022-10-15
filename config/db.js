const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.url = process.env.DB_CONFIG ;
db.mongoose = mongoose;
module.exports = db;