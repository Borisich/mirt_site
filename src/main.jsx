var React = require('react');
var ReactDOM = require('react-dom');
var List = require ('./components/List.jsx');
var TopBar = require ('./components/TopBar.jsx');
var Caption = require ('./components/Caption.jsx');
var HeaderContainer = require ('./components/HeaderContainer/HeaderContainer.jsx');
var Product = require ('./components/Product/Product.jsx');
var Footer = require ('./components/Footer.jsx');

ReactDOM.render(
  <div>
    <div className="topbar">
      <TopBar />
    </div>
    <div className="site_container">
      <HeaderContainer />
      <div className="clear"></div>
      <Caption />
      <div className="content_container">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
    <div className="clear"></div>
    <div className="footbar">
      <Footer />
    </div>
  </div>
  , document.getElementById('mirt') );
