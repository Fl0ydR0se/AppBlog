const express = require('express') // библиотке для веб сервера
const mongoose = require('mongoose')
const path = require('path') // библиотека для работы директорями
const postRouter = require('./routs/post.js')
const keys = require('./keys')
const port = process.env.port || 5000    // первій системный порт или наш 5000

const clientPath = path.join(__dirname, 'client') // абсолютный путь к индексштмл

mongoose.connect(keys.mongoURI)
.then(() => console.log('Mongo DB connected'))
.catch(err => console.error(err))
const app = express() // обїект приложения
app.use('/api/post', postRouter)
app.use(express.static(clientPath))

app.listen(port, () => {
    console.log(`server has been started on port ${port}`)
})
// nodemon -  библиоткеа для пересборки вебсервера при измененияхв коде