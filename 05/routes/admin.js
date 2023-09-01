const express = require('express');

const path = require('path')

const router = express.Router();

const rootDir = require('../unit/path');

// GET /admin/add-product
router.get('/add-product', (req, res, next)=>{ 
    console.log('in the middleware'); 
    res.sendFile(path.join(rootDir,'views','add-product.html'))
});

// POST /admin/add-product
router.post('/add-product',(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/');
});

module.exports = router;