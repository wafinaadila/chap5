const express = require('express')//import atau memanggil express
const app = express() //karena express adl sebuah object maka hrs diinisiasikan dlm variable
const port = 3000

const mainRouter = require("./router/main");
const gamesRouter = require("./router/game");
const loginRouter = require("./router/login");
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))//mengekspose folder public mjd global jd bisa diakses sm semua

app.use("/", mainRouter);
app.use("/game", gamesRouter);
app.use("/login", loginRouter);

// app.get('/', (req, res) => {//IMPLEMENTASI HTML KE EJS PADA FILE ROOT '/'
//     res.render("index")
    
// })

// app.get('/game', (req, res) => {//IMPLEMENTASI HTML KE EJS PADA FILE PROFILE

//     res.render("game")
// })
app.listen(port, () => console.log('application runing at port' + port))//menjalankan secara langsung menggunakan listen untk mengetahui app jalan di port brp
