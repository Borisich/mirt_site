var React = require('react');
var TopBar = React.createClass({
  render: function(){
    var self = this;
    var tovarWord = function(number){
      if ((number > 10) && (number < 20)){
        return "товаров";
      }
      if (number == 0){
        return "";
      }
      var evNumber = number % 10;
      switch(evNumber) {
        case 1:
          return "товар";
        case 2:
        case 3:
        case 4:
          return "товара";
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
          return "товаров";
        default:
          return "товаров";
      }
    };
    var info = "";
    if (this.props.cartTotalItems != 0){
      info =
        <div className="topInfo col-md-6 col-md-offset-2">
            Ваша <span className="cartLink" onClick={() => this.props.setNavigation('cart')}>корзина</span> - {this.props.cartTotalItems} {tovarWord(this.props.cartTotalItems)} на сумму {this.props.cartTotalPrice} руб.<span className="resetLink hidden-sm hidden-xs" onClick={this.props.onReset}>Очистить</span>
        </div>
    }
    else {
      info =
        <div className="topInfo col-md-6 col-md-offset-2">
            Ваша корзина пуста
        </div>
    }
    return (
      <div className="col-md-12 cart">
        <div className="row">
          {info}
        </div>
      </div>
    )
  }
});

module.exports = TopBar;
