var React = require('react');
var Slider = require('react-slick');
var Popup = require('./Popup.jsx');

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
    var OrderPanel = React.createClass({
      render: function(){
        return (
          <div className="col-xs-6">
            <input className="num_input" value={this.props.value} autoComplete="off" type="number" name="quantity" min="1" max="5" onChange={this.props.onChange}/>
            <div className="mid"></div>
  					<button className="buttons" onClick={this.props.onSubmit}>В корзину</button>
  				</div>
        )
      }
    });

    return(
      <div className="row">
				<div className="col-xs-3 product_price">
					{this.props.price}р.
				</div>
        <OrderPanel value={this.state.value} onChange={this.onChange} onSubmit={this.onSubmit}/>
				<div className="col-xs-3">
          <button className="buttons" onClick={() => this.refs.pop.showPopup()}>Просмотр</button>
          <Popup ref="pop" addToCart={this.props.addToCart} id={this.props.id} flag='1'/>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
