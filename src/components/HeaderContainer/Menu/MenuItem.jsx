var React = require('react');
var MenuItem = React.createClass({
  render: function(){
    return(
      <div className="menu_elem">
        <div onClick={this.props.action} className="header_elem">
					{this.props.text}
				</div>
				<br/>
				{this.props.isMarked && <div className="active_div"></div>}
      </div>
    )
  }
});

module.exports = MenuItem;
