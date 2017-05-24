var React = require('react');
var Slider = require('react-slick');
var DB = require('../../../public/data/ProductsDB.jsx');

import SkyLight from 'react-skylight';
import ImageZoom from 'react-medium-image-zoom';

var Popup = React.createClass({
  getInitialState: function(){
    return {
      value: 1
    }
  },
  searchProduct: function(id){
    for (var i=0; i<DB.length; i++){
      if (DB[i].id == id) {
        return DB[i]
        break;
      }
    }
    return null;
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
  showPopup: function(){
    this.refs.simpleDialog.show();
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
      backgroundColor: '#FFF8DC',//	'#577AA3',#FFF8DC
      color: '#000000',
      width: '90%',
      height: '90%',
      marginTop: '0%',
      marginLeft: '0%',
      top: '5%',
      left: '5%',
      overflowY: 'auto',
      overflowX: 'auto',
    };
    var product=this.searchProduct(this.props.id);
    var imageList = product.imageFiles.map(function(url){
      return (
        <div key={url}><ImageZoom
                image={{
                  src: product.photoPath+url,
                  alt: 'alt',
                  className: 'fig',
                  style: { height: settings.imageHeight }
                }}
              />
        </div>
      )
    })
    var OrderPanelPopup = React.createClass({
      render: function(){
        return (
          <div className="col-xs-8 col-sm-4 col-md-3">
            <input className="num_input" value={this.props.value} autoComplete="off" type="number" name="quantity" min="1" max="5" onChange={this.props.onChange}/>
      			<button className="buttons" onClick={this.props.onSubmit}>В корзину</button>
  				</div>
        )
      }
    });

    return(
      <SkyLight dialogStyles={myBigGreenDialog} hideOnOverlayClicked ref="simpleDialog" title="">
        <div className="hidden-sm hidden-xs hidden-md slider">
          <Slider {...settings}>
            {imageList}
          </Slider>
        </div>
        <h2>{product.caption}</h2>
        <div className="description">
          {product.description}
        </div>
        <br/>
        <div>
          <div className="col-xs-4 col-sm-2 col-md-2 product_price">
  					{product.price} р.
  				</div>
          <OrderPanelPopup value={this.state.value} onChange={this.onChange} onSubmit={this.onSubmit}/>
        </div>
      </SkyLight>
    )
  }
});

module.exports = Popup;
