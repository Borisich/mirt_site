var React = require('react');
var BottomPanel = require('./BottomPanel.jsx');
var Header = require('./Header.jsx');
var Picture = require('./Picture.jsx');



var Product = React.createClass({
  render: function () {
    return (
      <div className="product">
				<Picture imageUrls={this.props.imageUrls}/>
        <Header caption={this.props.caption}/>
        <BottomPanel id={this.props.id} price={this.props.price} caption={this.props.caption} addToCart={this.props.addToCart}/>
			</div>
    )
  }
})

module.exports = Product;
