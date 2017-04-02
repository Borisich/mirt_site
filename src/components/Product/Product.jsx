var React = require('react');
var BottomPanel = require('./BottomPanel.jsx');
var Header = require('./Header.jsx');
var Picture = require('./Picture.jsx');



var Product = React.createClass({
  render: function () {
    return (
      <div className="product">
				<Picture imageUrls={this.props.imageUrls}/>
        <Header />
        <BottomPanel imageUrls={this.props.imageUrls}/>
			</div>
    )
  }
})

module.exports = Product;
