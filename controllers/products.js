const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-products", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  //   products.push({ title: req.body.title });
  product.save()
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // console.log("SHOP:", adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  // USING PUG
  Product.fetchAll(products => {
    res.render("shop", { prods: products, title: "Shop", path: "/" })
  });
};
