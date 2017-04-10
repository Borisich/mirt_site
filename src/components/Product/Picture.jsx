//var React = require('react');
import React from 'react';
var Slider = require('react-slick');
var PrevButton = React.createClass({
  render: function(){
    return(
      <input className="prevbtn" type="image" src="images/back.png" height="16" width="16" onClick={this.props.onClick}/>
      //<button className="prevbtn" onClick={this.props.onClick}><img src="images/back.png" height="32" width="32"/></button>
    )
  }
});
var NextButton = React.createClass({
  render: function(){
    return(
      <input className="nextbtn" type="image" src="images/forward.png" height="16" width="16" onClick={this.props.onClick}/>
      //<button className="nextbtn" onClick={this.props.onClick}>Next</button>
    )
  }
});


var Picture = React.createClass({
  render: function(){
    var imageList = this.props.imageUrls.map(function(url){
      return <div key={url}><img src={url} height="300" width="402"/></div>
    });
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: true,
      prevArrow: <PrevButton/>,
      nextArrow: <NextButton/>,
      //swipeToSlide: false,
      //touchMove: false,
      draggable: false

    };
    //<img src="" height="300" width="400"/>
    return(
      <div className="product_thumb">
          <Slider {...settings}>
            {imageList}
          </Slider>
          <br/>
			</div>
    )
  }
});

module.exports = Picture;
