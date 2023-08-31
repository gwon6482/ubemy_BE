const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended :false}));

// admin Routes
app.use(adminRoutes);

// shop Roues
app.use(shopRoutes);


/**
 * 다음의 코드를 간소화 가능
 * const server = http.createServer(app)
 * server.listen(3000)
 */

app.listen(3000);
