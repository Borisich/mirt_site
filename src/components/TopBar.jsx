var React = require('react');
var TopBar = React.createClass({
  render: function(){
    if (!localStorage["mirt.cart"]){
      localStorage["mirt.cart"] = 0;
    }
    return(
      <div className="cart">
				 Ваша корзина - {localStorage["mirt.cart"]} шт.
			</div>
    )
  }
});

module.exports = TopBar;
