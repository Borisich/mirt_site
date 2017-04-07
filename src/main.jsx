var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
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
      cartBgStyle: "red"
    }
  },
  addToCart: function(value, id){
    var newCart = this.state.cart;
    newCart.push({
      id: id,
      count: value
    });
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
          totalItems += this.state.cart[i].count;
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
    var testUrls = ["data/white1/img/1.jpg", "data/white1/img/2.jpg", "data/white1/img/3.jpg", "data/white1/img/4.jpg", "data/white1/img/5.jpg"]
    var testDesc = "FUUUUUUUUUUUUUUUU!";
    var testCaption = "Test Caption";
    var productsList = ProductsDB.map(function(product){
      return <Product id={product.id} caption={product.caption} description={product.description} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} addToCart={self.addToCart} />
    });

    var cN = "topbar "+this.state.cartStyle;
    return (
      <div>
        <div className={cN} style={{backgroundColor: this.state.cartBgStyle}}>
          <TopBar cartTotalItems={this.cartTotalItems()} cartTotalPrice={this.cartTotalPrice()} onReset={this.resetCart} />
        </div>
        <div className="site_container">
          <HeaderContainer />
          <div className="clear"></div>
          <Caption />
          {/*}<Slider {...settings}>
            <div><div className="picdiv"><img src="data/white1/img/1.jpg" height="300" width="402"/></div></div>
            <div><p className="fig"><img src="data/white1/img/2.jpg" height="300" width="402"/></p></div>
            <div><img className="fig" src="data/white1/img/3.jpg" height="300" width="402"/></div>
            <div><img src="data/white1/img/4.jpg" height="300" width="402"/></div>
            <div><img src="data/white1/img/5.jpg" height="300" width="402"/></div>
            <div><img src="" height="300" width="402"/></div>
          </Slider>
          {*/}
          <div className="content_container">
            {productsList}
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
