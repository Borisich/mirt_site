var React = require('react');
var BottomPanel = React.createClass({
  render: function(){
    return(
      <div className="product_order">
				<div className="product_price">
					500 руб.
				</div>
				<div className="in_cart">
					В корзину
				</div>
				<div className="quick_view_button">
					<button>Просмотр</button>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
