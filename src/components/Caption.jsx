var React = require('react');
var Caption = React.createClass({
  getCaption: function(navigator, customHeader){
    if (customHeader) { return customHeader };
    if (navigator.cart) { return "Корзина: " };
    if (navigator.main) { return "Украшения: " };
    if (navigator.lastOrder) { return "Ваш последний заказ: " };
  },
  render: function(){
    return(
      <div className="caption">
					{this.getCaption(this.props.navigator, this.props.customHeader)}
			</div>
    )
  }
});

module.exports = Caption;
