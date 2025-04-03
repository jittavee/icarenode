const express = require('express')
const app = express()
const path = require('path')

//set folder for css js images
app.use(express.static(path.join(__dirname, 'public')))

//set view engine
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views/pages'))

//routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'หน้าแรก',
        currentPage: 'home'
    });
});

app.get('/about', (req, res) => {
    res.render('about'); // หรือ 'about'
});

app.get('/doctor', (req, res) => {
    res.render('doctor'); // หรือ 'about'
});

//server
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

