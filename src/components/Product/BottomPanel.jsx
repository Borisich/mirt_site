var React = require('react');
var Slider = require('react-slick');

import SkyLight from 'react-skylight';
var BottomPanel = React.createClass({
  render: function(){
    var settings = {
      dots: true,
      /*infinite: true,*/
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
      height: '700px',
      marginTop: '-20%',
      marginLeft: '-40%',
    };

    var imgDialog = {
      backgroundColor: '#456778',
      width: '60%',
      height: '700px',
      marginTop: '-20%',
      marginLeft: '-20%',
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
              <div><img className="fig" src="data/white1/img/1.jpg" height="400" /></div>
              <div><img className="fig" src="data/white1/img/2.jpg" height="400" /></div>
              <div><img className="fig" src="data/white1/img/3.jpg" height="400" /></div>
              <div><img className="fig" src="data/white1/img/4.jpg" height="400" /></div>
              <div><img className="fig" src="data/white1/img/5.jpg" height="400" /></div>
              <div><img className="fig" src="" height="400" /></div>
            </Slider>
            <h2>Название набора</h2>
            <div>
              ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание ОписаниеОписаниеОписаниеОписаниеОписаниеОписание
            </div>

            <p>Hello2</p>
          </SkyLight>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
