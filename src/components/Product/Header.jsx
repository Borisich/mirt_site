var React = require('react');
var Header = React.createClass({
  render: function(){
    return(
      <div className="product_header">
				{this.props.caption}
			</div>
    )
  }
});

module.exports = Header;
