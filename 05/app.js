const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(__dirname,'public')));

// admin Routes
app.use('/admin',adminRoutes);

// shop Roues
app.use(shopRoutes);


/**
 * 다음의 코드를 간소화 가능
 * const server = http.createServer(app)
 * server.listen(3000)
 */

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404not-found.html'))
})

app.listen(3000);
