var React = require('react');
var Slider = require('react-slick');
var X = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.onClick}>Prev</button>
    )
  }
})
var Picture = React.createClass({
  render: function(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: <X/>,
      //swipeToSlide: false,
      //touchMove: false,
      draggable: false

    };
    //<img src="" height="300" width="400"/>
    return(
      <div className="product_thumb">
          <Slider {...settings}>
            <div><img src="data/white1/img/1.jpg" height="300" width="400"/></div>
            <div><img src="data/white1/img/2.jpg" height="300" width="400"/></div>
            <div><img src="data/white1/img/3.jpg" height="300" width="400"/></div>
            <div><img src="data/white1/img/4.jpg" height="300" width="400"/></div>
            <div><img src="data/white1/img/5.jpg" height="300" width="400"/></div>
            <div><img src="" height="300" width="400"/></div>
          </Slider>
          <br/>
			</div>
    )
  }
});

module.exports = Picture;
