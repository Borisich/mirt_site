var React = require('react');
var Slider = require('react-slick');

import SkyLight from 'react-skylight';
var BottomPanel = React.createClass({
  render: function(){
    var settings = {
      dots: true,
      /*infinite: true,*/
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      /*adaptiveHeight: true,*/
      /*arrows: true,*/
      /*className: "centered",*/
      centerMode: true,
      /*fade: true,*/
      //swipeToSlide: false,
      //touchMove: false,
      draggable: false

    };
    var myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '80%',
      height: '600px',
      marginTop: '-300px',
      marginLeft: '-35%',
    };
    return(

      <div className="product_order">
				<div className="product_price">
					500 руб.
				</div>
				<div className="in_cart">
					В корзину
				</div>
				<div className="quick_view_button">
					<button onClick={() => this.refs.simpleDialog.show()}>Просмотр</button>
          <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
            <Slider {...settings}>
              <div><img className="fig" src="data/white1/img/1.jpg" height="300" width="402"/></div>
              <div><img className="fig" src="data/white1/img/2.jpg" height="300" width="402"/></div>
              <div><img className="fig" src="data/white1/img/3.jpg" height="300" width="402"/></div>
              <div><img className="fig" src="data/white1/img/4.jpg" height="300" width="402"/></div>
              <div><img className="fig" src="data/white1/img/5.jpg" height="300" width="402"/></div>
              <div><img className="fig" src="" height="300" width="402"/></div>
            </Slider>
            <h1>Hello, I dont have any callback.</h1>
            <p>Hello1</p>

            <p>Hello2</p>
          </SkyLight>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
