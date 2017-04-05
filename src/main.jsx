var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
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
    var val = localStorage["mirt.cart"] ? Number(localStorage["mirt.cart"]) : 0
    return {
      cart: val,
      cartStyle: "cartStyleUsual",
      cartBgStyle: "red"
    }
  },
  addToCart: function(value){
    localStorage["mirt.cart"] = this.state.cart + value;
    this.setState({
      cart: this.state.cart+value,
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
    localStorage["mirt.cart"] = 0;
    this.setState({
      cart: 0
    });
    this.highlightCart();
  },
  render: function() {
    var self = this;
    var products = [
      {
        caption: "Белая штука",
        description: "Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия"+
          "AAAAAAAAAAAAAAA"+
          "BBBBBBBB"+
          "CCCCCCCCCC"+
          "DDDDDDDDDD",
        photoPath: "data/white1/img/",
        imageFiles: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        price: 500
      },
      {
        caption: "Красная штука",
        description: "Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия Подробное описание изделия"+
          "AAAAAAAAAAAAAAA"+
          "BBBBBBBB"+
          "CCCCCCCCCC"+
          "DDDDDDDDDD",
        photoPath: "data/red1/img/",
        imageFiles: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
        price: 600
      },
    ];
    var testUrls = ["data/white1/img/1.jpg", "data/white1/img/2.jpg", "data/white1/img/3.jpg", "data/white1/img/4.jpg", "data/white1/img/5.jpg"]
    var testDesc = "FUUUUUUUUUUUUUUUU!";
    var testCaption = "Test Caption";
    var productsList = products.map(function(product){
      return <Product caption={product.caption} description={product.description} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} addToCart={self.addToCart} />
    });

    var cN = "topbar "+this.state.cartStyle;
    return (
      <div>
        <div className={cN} style={{backgroundColor: this.state.cartBgStyle}}>
          <TopBar cart={this.state.cart} onReset={this.resetCart} />
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
            <Product imageUrls={testUrls} description={testDesc} caption={testCaption} addToCart={this.addToCart}/>
            <Product imageUrls={testUrls} description={testDesc} caption={testCaption} addToCart={this.addToCart}/>
            <Product imageUrls={testUrls} description={testDesc} caption={testCaption} addToCart={this.addToCart}/>
            <Product imageUrls={testUrls} description={testDesc} caption={testCaption} addToCart={this.addToCart}/>
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
