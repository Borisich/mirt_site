var React = require('react');
var TopBar = React.createClass({
  render: function(){
    return(
      <div className="topbar">
        <div className="cart">
					 Ваша корзина - 0 руб.
				</div>
      </div>
    )
  }
});

module.exports = TopBar;
