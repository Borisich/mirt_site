var React = require('react');
var Menu = React.createClass({
  render: function(){
    return(
      <div className="menu">
        <ul>
					<li onClick={() => this.props.setNavigation('main')}>Главная</li>
					<li>О компании</li>
					<li onClick={() => this.props.setNavigation('cart')}>Корзина</li>
					<li>Оформление заказа</li>
					<li>Контакты</li>
				</ul>
      </div>
    )
  }
});

module.exports = Menu;
