var React = require('react');
var ReactDOM = require('react-dom');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
var Cart = require ('./components/Cart.jsx');
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
    var val = localStorage["mirt.cart"] ? JSON.parse(localStorage["mirt.cart"]) : []
    //var val = [];
    return {
      cart: val,
      cartStyle: "cartStyleUsual",
      cartBgStyle: "red",
      navigator: {
        productsShow: 0,
        cartShow: 1
      }
    }
  },
  setNavigation: function(location){
    //alert('CLICK!');
    switch (location) {
      case 'main':
        this.setState({navigator:{
          productsShow: 1,
          cartShow: 0
        }});
        //alert('MAIN');
        break;
      case 'cart':
        this.setState({navigator:{
          productsShow: 0,
          cartShow: 1
        }});
        //alert('CART');
        break;
      default:
        this.setState({navigator:{
          productsShow: 1,
          cartShow: 0
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
  render: function() {
    var self = this;
    var productsList = ProductsDB.map(function(product){
      return <Product key={product.id} id={product.id} caption={product.caption} description={product.description} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} addToCart={self.addToCart} />
    });
    var cN = "topbar "+this.state.cartStyle;
    var CTopBar = (
      <div className={cN} style={{backgroundColor: this.state.cartBgStyle}}>
        <TopBar cartTotalItems={this.cartTotalItems()} cartTotalPrice={this.cartTotalPrice()} onReset={this.resetCart} />
      </div>
    );
    var CSiteContainer = (
      <div className="site_container"></div>
    );
    var CHeaderContainer = (
      <HeaderContainer />

    );
    var Clear = <div className="clear"></div>;
    var CCaption = (
      <Caption />
    );
    var CContentContainer = (
      <div className="content_container">
        {productsList}
      </div>
    );
    var CFooter = (
      <div className="footbar">
        <Footer />
      </div>
    );
    var CMain = (
      <div>
        {CTopBar}
        {CSiteContainer}
        {CHeaderContainer}
      </div>
    )
    return (
        <div>
          <div className={cN} style={{backgroundColor: this.state.cartBgStyle}}>
            <TopBar cartTotalItems={this.cartTotalItems()} cartTotalPrice={this.cartTotalPrice()} onReset={this.resetCart} />
          </div>
          <div className="site_container">
            <HeaderContainer setNavigation={this.setNavigation}/>
            <div className="clear"></div>
            <Caption />
            <div className="content_container">
              {this.state.navigator.productsShow ? productsList : null}
              {this.state.navigator.cartShow ? (<Cart changeCart={this.changeCart} cart={this.state.cart} DB={ProductsDB} />) : null}
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
