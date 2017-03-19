var React = require('react');
var Menu = React.createClass({
  render: function(){
    return(
      <div className="menu">
        <ul>
					<li>Главная</li>
					<li>О компании</li>
					<li>Корзина</li>
					<li>Оформление заказа</li>
					<li>Контакты</li>
				</ul>
      </div>
    )
  }
});

module.exports = Menu;
