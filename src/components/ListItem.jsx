var React = require('react');
var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        {this.props.ingredient}
      </li>
    )
  }
});

module.exports = ListItem;
