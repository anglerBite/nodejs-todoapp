const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url)
    .then(() => console.log('データベースと接続完了'))
    .catch((err) => console.log(err))
}

module.exports = connectDB;