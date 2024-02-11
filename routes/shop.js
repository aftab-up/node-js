const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log("SHOP:", adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // USING PUG
  const products = adminData.products
  res.render('shop', {prods : products, title:"Shop", path:'/'})

});

module.exports = router;
