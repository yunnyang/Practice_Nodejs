const express = require('express') // express 모듈을 가져옴
const app = express() //function을 이용해서 새로운 express app을 만듬
const port = 5000 // any value, back server 

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:12345@boiler-plate.rnur6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/',(req,res) => res.send('Hello world!')) //root dir에 오면 hello world를 출력

app.listen(port,() => console.log(`Example app listening on port ${port}!`))