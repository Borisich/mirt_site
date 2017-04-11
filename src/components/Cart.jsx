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
  onChange: function(event){
    //alert(event.target.getAttribute('data-pid'));
    //() => this.props.setNavigation('main');
    if (event.target.value < 0) return;
    this.props.changeCart(Number(event.target.value), Number(event.target.getAttribute('data-pid')));
    console.log("ID: "+Number(event.target.getAttribute('data-pid')));
    console.log("New value: "+Number(event.target.value));
  },
  render: function(){
    var self = this;
    var cart = this.props.cart;
    //console.log(cart);
    var cartList = cart.map(function(product){
      var sProduct=self.searchProduct(product.id);
      return (
        <li key={product.id}>
          <img className="cart_img" src={sProduct.photoPath+sProduct.imageFiles[0]} />
          ID: {product.id}; Caption: {sProduct.caption}; Price: {sProduct.price};  {product.count} шт.
          <input className="num_input" value={product.count} autoComplete="off" type="number" name="quantity" data-pid={product.id} onChange={self.onChange}/>
        </li>
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
