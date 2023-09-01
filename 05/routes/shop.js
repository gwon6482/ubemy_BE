const path = require('path')

const express = require('express');

const rootDir = require('../unit/path');

const router = express.Router();

router.get('/', (req, res, next)=>{
    // console.log('process dir name: ', require.main)
    // console.log('process mm name: ', path.dirname(process.mainModule))
    // console.log('process f name: ', path.dirname(process.mainModule.filename))
    
    res.sendFile(path.join(__dirname,'..','views','shop.html'))
});



module.exports = router;