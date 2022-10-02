require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(
    fileUpload({
        useTempFiles: true,
    })
)

// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
// app.use('/api', require('./routes/paymentRouter'))

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose
    .connect(URI, {
        // useCreateIndex: true,
        // useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Подключение с MongoDB установлено'))
    .catch((err) => console.log('Ошибка с подключением MongoDB', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Сервер запущен на порту', PORT)
})
