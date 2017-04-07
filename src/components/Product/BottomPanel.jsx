var React = require('react');
var Slider = require('react-slick');

import SkyLight from 'react-skylight';
import ImageZoom from 'react-medium-image-zoom';

var BottomPanel = React.createClass({
  getInitialState: function(){
    return {
      value: 1
    }
  },
  onChange: function(event){
    this.setState({
      value: event.target.value
    })
  },
  onSubmit: function(){
    this.props.addToCart(Number(this.state.value),Number(this.props.id));
    this.setState({
      value: 1
    })
  },
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
    var OrderPanel = React.createClass({
      render: function(){
        return (
          <div className="in_cart_button_container">
            <input className="num_input" value={this.props.value} autoComplete="off" type="number" name="quantity" min="1" max="5" onChange={this.props.onChange}/>
            <div className="mid"></div>
  					<button className="buttons" onClick={this.props.onSubmit}>В корзину</button>
  				</div>
        )
      }
    });
    return(
      <div className="product_order">
				<div className="product_price">
					{this.props.price} руб.
				</div>
        <OrderPanel value={this.state.value} onChange={this.onChange} onSubmit={this.onSubmit}/>
				<div className="quick_view_button_container">
					<button className="buttons" onClick={() => this.refs.simpleDialog.show()}>Просмотр</button>
          <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="">
            <Slider {...settings}>
              {imageList}
            </Slider>
            <h2>{this.props.caption}</h2>
            <div className="description">
              {this.props.description}
            </div>
            <br/>
            <div className="order_panel">
              <div className="product_price">
      					{this.props.price} руб.
      				</div>
              <OrderPanel value={this.state.value} onChange={this.onChange} onSubmit={this.onSubmit}/>
            </div>
          </SkyLight>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
