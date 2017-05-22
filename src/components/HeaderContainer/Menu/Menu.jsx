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
      <div className="col-md-8">
        <MenuItem isMarked={this.isMarked('main')} text="Главная" action={() => this.props.setNavigation('main')} />
        <MenuItem isMarked={this.isMarked('about')} text="О компании" action={() => this.props.setNavigation('about')} />
        <MenuItem isMarked={this.isMarked('cart')} text="Корзина" action={() => this.props.setNavigation('cart')} />
        <MenuItem isMarked={this.isMarked('contacts')} text="Оплата и доставка" action={() => this.props.setNavigation('contacts')} />
        <MenuItem isMarked={this.isMarked('lastOrder')} text="Последний заказ" action={() => this.props.setNavigation('lastOrder')} />
      </div>
    )
  }
});

module.exports = Menu;
