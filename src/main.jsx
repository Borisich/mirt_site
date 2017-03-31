var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');
var Slider = require('react-slick');

var settings = {
  dots: true,
  /*infinite: true,*/
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  /*adaptiveHeight: true,*/
  /*arrows: true,*/
  /*className: "centered",*/
  /*centerMode: true,*/
  //swipeToSlide: false,
  //touchMove: false,
  draggable: false

};

ReactDOM.render(
  <div>
    <div className="topbar">
      <TopBar />
    </div>
    <div className="site_container">
      <HeaderContainer />
      <div className="clear"></div>
      <Caption />
      <Slider {...settings}>
        <div><div className="picdiv"><img src="data/white1/img/1.jpg" height="300" width="402"/></div></div>
        <div><p className="fig"><img src="data/white1/img/2.jpg" height="300" width="402"/></p></div>
        <div><img src="data/white1/img/3.jpg" height="300" width="402"/></div>
        <div><img src="data/white1/img/4.jpg" height="300" width="402"/></div>
        <div><img src="data/white1/img/5.jpg" height="300" width="402"/></div>
        <div><img src="" height="300" width="402"/></div>
      </Slider>
      <div className="content_container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
    <div className="clear"></div>
    <div className="footbar">
      <Footer />
    </div>
  </div>
  , document.getElementById('mirt') );
