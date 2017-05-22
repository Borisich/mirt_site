var React = require('react');
var Logo = require('./Logo.jsx');
var Menu = require('./Menu/Menu.jsx');


var HeaderContainer = React.createClass({
  render: function () {
    return (
      <div className="row">
        <Logo/>
        <Menu setNavigation={this.props.setNavigation} navigator={this.props.navigator}/>
      </div>
    )
  }
})

module.exports = HeaderContainer;
