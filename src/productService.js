let cart= [];
let products= [];

exports.addToCart = (product) =>{
    cart.push(product);
};
exports.setStoreProducts = (productss) => {
    products = productss;
};
exports.getProducts = () =>{
    return products;
};
exports.getProduct = (id) =>{
    return products.find(product => product._id == id);
};