var React = require('react');
var TopBar = React.createClass({
  render: function(){
    return(
      <div className="cart">
				 Ваша корзина - {this.props.cart} шт.
			</div>
    )
  }
});

module.exports = TopBar;
