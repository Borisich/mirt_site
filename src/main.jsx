var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
var ProductsDB = require('../public/data/ProductsDB.jsx');
import { Router, Route, Switch, HashRouter} from 'react-router-dom';


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
    var productsList = ProductsDB.map(function(product){
      return <Product id={product.id} caption={product.caption} description={product.description} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} addToCart={self.addToCart} />
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
            <HeaderContainer />
            <div className="clear"></div>
            <Caption />
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
  /*return (

      <HashRouter>

        <Route path="/" component={CSiteContainer}>
          <Route component={CHeaderContainer}></Route>
          <Route component={Clear}></Route>
          <Route component={CCaption}></Route>
          <Route component={CContentContainer}></Route>
          <Route component={Clear}></Route>
        </Route>

      </HashRouter>
    )*/
  }
});

ReactDOM.render(
  <Main />
  , document.getElementById('mirt') );


  /*var CSiteContainer = React.createClass({
    render: function(){
      return <div className="site_container"></div>
    }
  });
  ReactDOM.render(
    <HashRouter>
      <Route path="/" component={CSiteContainer}>

      </Route>
    </HashRouter>
    , document.getElementById('mirt') );
*/
