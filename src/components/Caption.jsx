var React = require('react');
var Caption = React.createClass({
  getCaption: function(navigator, customHeader){
    if (customHeader) { return customHeader };
    if (navigator.cart) { return "Корзина: " };
    if (navigator.main) { return "Украшения: " };
    if (navigator.lastOrder) { return "Ваш последний заказ: " };
    if (navigator.about) { return "О компании: " };
    if (navigator.contacts) { return "Оплата и доставка: " };
  },
  render: function(){
    return(
      <div className="caption">
					<h1> {this.getCaption(this.props.navigator, this.props.customHeader)} </h1>
			</div>
    )
  }
});

module.exports = Caption;
