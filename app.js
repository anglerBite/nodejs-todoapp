const express = require('express');
const app = express();
const taskRoute = require('./routes/tasks');
const connectDB = require('./db/connect');
require("dotenv").config();

const PORT = 3000;

app.use(express.json());
app.use(express.static("./public"))

//ルーティング設計
app.use('/api/v1/tasks', taskRoute);

//データベースと接続
const start = async () => {
    try {
        await connectDB(process.env.MONGO_VERCEL_URL || process.env.MONGO_URL);
        app.listen(process.envPORT || PORT, () => console.log('サーバー起動'));
    } catch (err) {
        console.log(err);
    }
}
start();