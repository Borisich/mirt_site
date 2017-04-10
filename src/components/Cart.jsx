//var ProductsDB = require('../../public/data/ProductsDB.jsx');
var React = require('react');
var Cart = React.createClass({
  searchProduct: function(id){
    for (var i=0; i<this.props.DB.length; i++){
      if (this.props.DB[i].id == id) {
        return this.props.DB[i]
        break;
      }
    }
    return null;
  },
  render: function(){
    var self = this;
    var cart = localStorage["mirt.cart"] ? JSON.parse(localStorage["mirt.cart"]) : []
    console.log(cart);
    var cartList = cart.map(function(product){
      var sProduct=self.searchProduct(product.id);
      return (
        <li key={product.id}> <img className="cart_img" src={sProduct.photoPath+sProduct.imageFiles[0]} /> ID: {product.id}; Caption: {sProduct.caption}; Price: {sProduct.price};  {product.count} шт.</li>
      )
    });
    return(
      <div className="cartContent">
        {cartList}
      </div>
    )
  }
});

module.exports = Cart;
