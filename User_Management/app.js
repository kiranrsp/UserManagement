require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const port = 8080 || process.env.PORT;



app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));


app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes
app.use('/', require('./server/routes/customer.js'))



//error page
app.get('*',(req,res)=>{
    res.status(404).render('errorPage');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});