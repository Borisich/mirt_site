var React = require('react');
var Logo = require('./Logo.jsx');
var Menu = require('./Menu.jsx');


var HeaderContainer = React.createClass({
  render: function () {
    return (
      <div className="header_container">
        <Logo/>
        <Menu setNavigation={this.props.setNavigation}/>
      </div>
    )
  }
})

module.exports = HeaderContainer;
