var React = require('react');
var Caption = React.createClass({
  getCaption: function(navigator){
    if (navigator.cart) { return "Корзина: " };
    if (navigator.main) { return "Украшения: " };
  },
  render: function(){
    return(
      <div className="caption">
					{this.getCaption(this.props.navigator)}
			</div>
    )
  }
});

module.exports = Caption;
