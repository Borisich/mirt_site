var React = require('react');
var Slider = require('react-slick');

var Picture = React.createClass({
  render: function(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false

    };
    //<img src="" height="300" width="400"/>
    return(
      <div className="product_thumb">

          <Slider {...settings}>
            <div><img src="" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
          </Slider>
          <br/>
			</div>
    )
  }
});

module.exports = Picture;
