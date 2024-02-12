const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

const p = path.join(rootDir, "data", "products.json");

const productsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (!err) {
      return cb(JSON.parse(fileContent));
    }
    return cb([]);
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    productsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // We are defining it as static as we do not want to create class Product everytime . We just want to get the the products
  static fetchAll(cb) {
    productsFromFile(cb);
  }
};
