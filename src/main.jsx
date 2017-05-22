var React = require('react');
var ReactDOM = require('react-dom');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
var Cart = require ('./components/Cart.jsx');
var LastOrder = require ('./components/LastOrder.jsx');
var About = require ('./components/About.jsx');
var Contacts = require ('./components/Contacts.jsx');
var ProductsDB = require('../public/data/ProductsDB.jsx');



/*var Slider = require('react-slick');*/

/*var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  //swipeToSlide: false,
  //touchMove: false,
  draggable: false

};*/



var Main = React.createClass({
  getInitialState: function(){
    //localStorage["mirt.cart"] = [];
    var cart = localStorage["mirt.cart"] ? JSON.parse(localStorage["mirt.cart"]) : []
    var lastOrder = localStorage["mirt.lastOrder"] ? JSON.parse(localStorage["mirt.lastOrder"]) : []
    //var val = [];
    return {
      cart: cart,
      lastOrder: lastOrder,
      cartStyle: "cartStyleUsual",
      cartBgStyle: "red",
      navigator: {
        main: 1,
        cart: 0,
        lastOrder: 0,
        about: 0,
        contacts: 0
      },
      customHeader: ""
    }
  },
  updateLastOrder: function(cart){
    localStorage["mirt.lastOrder"] = JSON.stringify(cart);
    this.setState({
      lastOrder: cart,
    });
  },
  setCustomHeader: function(header){
    this.setState({customHeader: header})
  },
  setNavigation: function(location){
    this.setState({customHeader: ""})
    switch (location) {
      case 'main':
        this.setState({navigator:{
          main: 1,
          cart: 0,
          lastOrder: 0,
          about: 0,
          contacts: 0
        }});
        break;
      case 'cart':
        this.setState({navigator:{
          main: 0,
          cart: 1,
          lastOrder: 0,
          about: 0,
          contacts: 0
        }});
        break;
      case 'lastOrder':
        this.setState({navigator:{
          main: 0,
          cart: 0,
          lastOrder: 1,
          about: 0,
          contacts: 0
        }});
        break;
      case 'about':
        this.setState({navigator:{
          main: 0,
          cart: 0,
          lastOrder: 0,
          about: 1,
          contacts: 0
        }});
        break;
      case 'contacts':
        this.setState({navigator:{
          main: 0,
          cart: 0,
          lastOrder: 0,
          about: 0,
          contacts: 1
        }});
        break;
      default:
        this.setState({navigator:{
          main: 1,
          cart: 0,
          lastOrder: 0,
          about: 0,
          contacts: 0
        }});
    }
  },
  changeCart: function(value, id){
    var newCart = this.state.cart;
    for (var i=0; i<newCart.length; i++){
      if (newCart[i].id == id){
        newCart[i].count = value;
        break;
      }
    }
    localStorage["mirt.cart"] = JSON.stringify(newCart);
    this.setState({
      cart: newCart,
    });
    this.highlightCart();
  },
  addToCart: function(value, id){
    var newCart = this.state.cart;
    var found = 0;
    for (var i=0; i<newCart.length; i++){
      if (newCart[i].id == id){
        newCart[i].count += value;
        found = 1;
        break;
      }
    }
    if (!found){
      newCart.push({
        id: id,
        count: value
      });
    }

    localStorage["mirt.cart"] = JSON.stringify(newCart);
    this.setState({
      cart: newCart,
    });
    this.highlightCart();
  },
  delFromCart: function(id){
    var newCart = this.state.cart;
    for (var i=0; i<newCart.length; i++){
      if (newCart[i].id == id){
        newCart.splice(i,1);
        break;
      }
    }
    localStorage["mirt.cart"] = JSON.stringify(newCart);
    this.setState({
      cart: newCart,
    });
    this.highlightCart();
  },
  highlightCart: function(){
    var self=this;
    this.setState({cartStyle: "cartStyleHighlight"});
    this.setState({cartBgStyle: "yellow"});
    setTimeout(function(){
      self.setState({cartStyle: "cartStyleUsual"});
      self.setState({cartBgStyle: "red"});
    },
    200)

  },
  resetCart: function(){
    localStorage["mirt.cart"] = [];
    this.setState({
      cart: []
    });
    this.highlightCart();
  },
  cartTotalItems: function(){
    var totalItems = 0;
    for(var i=0; i<this.state.cart.length; i++){
      for(var j=0; j<ProductsDB.length; j++){
        if (this.state.cart[i].id == ProductsDB[j].id){
          totalItems += Number(this.state.cart[i].count);
        }
      }
    }
    return totalItems;
  },
  cartTotalPrice: function(){
    var totalPrice = 0;
    for(var i=0; i<this.state.cart.length; i++){
      for(var j=0; j<ProductsDB.length; j++){
        if (this.state.cart[i].id == ProductsDB[j].id){
          totalPrice += ProductsDB[j].price*this.state.cart[i].count;
        }
      }
    }
    return totalPrice;
  },
  lastOrderTotalPrice: function(){
    var totalPrice = 0;
    for(var i=0; i<this.state.lastOrder.length; i++){
      for(var j=0; j<ProductsDB.length; j++){
        if (this.state.lastOrder[i].id == ProductsDB[j].id){
          totalPrice += ProductsDB[j].price*this.state.lastOrder[i].count;
        }
      }
    }
    return totalPrice;
  },
  render: function() {
    var self = this;
    var productsList = ProductsDB.map(function(product){
      return <Product key={product.id} id={product.id} caption={product.caption} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} addToCart={self.addToCart} />
    });
    var cN = "topbar "+this.state.cartStyle;
    return (
        <div>
          <div className={cN + " row"} style={{backgroundColor: this.state.cartBgStyle}}>
            <TopBar setNavigation={this.setNavigation} cartTotalItems={this.cartTotalItems()} cartTotalPrice={this.cartTotalPrice()} onReset={this.resetCart} />
          </div>
          <div className="site_container">
            <HeaderContainer setNavigation={this.setNavigation} navigator={this.state.navigator}/>
            <Caption navigator={this.state.navigator} customHeader={this.state.customHeader}/>
            <div className="content_container row">
              {this.state.navigator.main ? productsList : null}
              {this.state.navigator.cart ? (<Cart updateLastOrder={this.updateLastOrder} setCustomHeader={this.setCustomHeader} delFromCart={this.delFromCart} summ={this.cartTotalPrice()} changeCart={this.changeCart} cartTotalItems={this.cartTotalItems()} addToCart={this.addToCart} cart={this.state.cart} DB={ProductsDB} onReset={this.resetCart}/>) : null}
              {this.state.navigator.lastOrder ? (<LastOrder addToCart={this.addToCart} setCustomHeader={this.setCustomHeader} lastOrder={this.state.lastOrder} summ={this.lastOrderTotalPrice()} DB={ProductsDB}/>) : null}
              {this.state.navigator.about ? <About /> : null}
              {this.state.navigator.contacts ? <Contacts /> : null}
            </div>
          </div>
          <div className="clear"></div>
          <div className="footbar">
            <Footer />
          </div>
        </div>
    )
  }
});

ReactDOM.render(
  <Main />
  , document.getElementById('mirt') );
