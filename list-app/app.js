const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('public'))
const connection = mysql.createConnection({
        host: 'localhost',
        user: 'asunarou',
        password: 'password',
        database: 'list_app'
})




app.get('/', (req, res) => {
    res.render('top.ejs')
})

app.get('/index', (req, res) => {
    connection.query((error, results) => {
        'select * from items',

            console.log(results)
            res.render('index.ejs')
        }
    )
    res.render('index.ejs')
})

app.listen(4000);
