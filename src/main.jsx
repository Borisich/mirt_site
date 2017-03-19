var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var HeaderContainer = require ('./components/HeaderContainer/Main.jsx');

ReactDOM.render(
  <div>
    <TopBar />
    <div className="site_container">
      <HeaderContainer />
    </div>
  </div>
  , document.getElementById('mirt') );
//ReactDOM.render(<HeaderContainer />, document.getElementById('mirt') );
