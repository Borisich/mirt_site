var React = require('react');
var Slider = require('react-slick');

import SkyLight from 'react-skylight';
import ImageZoom from 'react-medium-image-zoom';

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
      draggable: false,
      imageHeight: "260px"

    };
    var myBigGreenDialog = {
      backgroundColor: '#00897B',
      color: '#ffffff',
      width: '80%',
      height: '700px',
      marginTop: '-20%',
      marginLeft: '-40%',
    };

    var imageList = this.props.imageUrls.map(function(url){
      return (
        <div><ImageZoom
                image={{
                  src: url,
                  alt: 'alt',
                  className: 'fig',
                  style: { height: settings.imageHeight }
                }}
              />
        </div>
      )
    })

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
              {imageList}
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
