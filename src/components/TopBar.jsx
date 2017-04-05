var React = require('react');
var TopBar = React.createClass({
  render: function(){
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
    if (this.props.cart != 0){
      info =
        <div className="cart">
            Ваша корзина - {this.props.cart} {tovarWord(this.props.cart)} на сумму x руб. &nbsp; &nbsp; &nbsp;  <span className="resetLink" onClick={this.props.onReset}>Очистить</span>
        </div>
    }
    else {
      info =
        <div className="cart">
            Ваша корзина пуста
        </div>
    }
    return info
  }
});

module.exports = TopBar;
