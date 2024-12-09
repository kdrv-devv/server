// api/products.js
export default function handler(req, res) {
    // JSON faylini o'qing
    const products = require('./db.json'); // JSON faylini o'qish
  
    res.status(200).json(products); // JSON faylini klientga yuborish
  }
  