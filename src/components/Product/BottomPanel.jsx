var React = require('react');
import SkyLight from 'react-skylight';
var BottomPanel = React.createClass({
  render: function(){
    return(
      <div className="product_order">
				<div className="product_price">
					500 руб.
				</div>
				<div className="in_cart">
					В корзину
				</div>
				<div className="quick_view_button">
					<button onClick={() => this.refs.simpleDialog.show()}>Просмотр</button>
          <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
            <h1>Hello, I dont have any callback.</h1>
            <p>Hello1</p>
            <p>Hello2</p>
          </SkyLight>
				</div>
	  </div>
    )
  }
});

module.exports = BottomPanel;
