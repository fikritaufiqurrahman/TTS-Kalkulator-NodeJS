 // imports
 const express = require('express');
 const app = express();
 const port = 3000;

 // Static Files
 app.use(express.static('public'))
 app.use('/css', express.static(__dirname + 'public/css'))
 app.use('/js', express.static(__dirname + 'public/js'))
 app.use('/img', express.static(__dirname + 'public/img'))

 app.set('views', './views')
 app.set('view engine', 'ejs')

 app.get('', (req, res) => {
     res.render('index', { text: 'This is Teka Teki Silang Application' })
 })
 app.get('/kalkulator', (req, res) => {
         res.render('kalkulator', { text: 'This is Kalkulator Application' })
     })
     //  Listen on port 3000
 app.listen(port, () => console.info(`Listening on port ${port}`))