var express = require('express');
var router = express.Router();//可以使用express Rouetr类创建模块化 可挂载的路由句柄
router.get('/',function (req,res) {
    console.log('123')
    res.render('admin/login');
})

module.exports = router;