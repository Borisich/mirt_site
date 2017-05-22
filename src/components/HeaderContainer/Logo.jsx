var React = require('react');
var Logo = React.createClass({
  render: function(){
    return(
      <div className="logo col-md-4">
        <img src="images/logo.png" />
      </div>
    )
  }
});

module.exports = Logo;
