var React = require('react');
var MenuItem = require('./MenuItem.jsx');
var Menu = React.createClass({
  isMarked: function(MenuItemName){
    if (this.props.navigator[MenuItemName] == 1) {
      return true;
    }
    else {
      return false;
    }
  },
  render: function(){
    return(
      <div className="menu">
        <MenuItem isMarked={this.isMarked('main')} text="Главная" action={() => this.props.setNavigation('main')} />
        <MenuItem text="О компании" action={() => {}} />
        <MenuItem isMarked={this.isMarked('cart')} text="Корзина" action={() => this.props.setNavigation('cart')} />
        <MenuItem text="Контакты" action={() => {}} />
        <MenuItem isMarked={this.isMarked('lastOrder')} text="Последний заказ" action={() => this.props.setNavigation('lastOrder')} />
      </div>
    )
  }
});

module.exports = Menu;
