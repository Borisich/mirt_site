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
  return <Product caption={product.caption} description={product.description} imageUrls={product.imageFiles.map(function(file){return (product.photoPath+file)})} price={product.price} />
})

ReactDOM.render(
  <div>
    <div className="topbar">
      <TopBar />
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
        <Product imageUrls={testUrls} description={testDesc} caption={testCaption}/>
        <Product imageUrls={testUrls} description={testDesc} caption={testCaption}/>
        <Product imageUrls={testUrls} description={testDesc} caption={testCaption}/>
        <Product imageUrls={testUrls} description={testDesc} caption={testCaption}/>
      </div>
    </div>
    <div className="clear"></div>
    <div className="footbar">
      <Footer />
    </div>
  </div>
  , document.getElementById('mirt') );
