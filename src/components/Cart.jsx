//var ProductsDB = require('../../public/data/ProductsDB.jsx');
var Popup = require('./Product/Popup.jsx');

var React = require('react');


//********************************ДИЧЬ*************************************************************
//********************************КОНЕЦ ДИЧИ*************************************************************

var Cart = React.createClass({
  searchProduct: function(id){
    for (var i=0; i<this.props.DB.length; i++){
      if (this.props.DB[i].id == id) {
        return this.props.DB[i]
        break;
      }
    }
    return null;
  },
  onChange: function(event){
    //alert(event.target.getAttribute('data-pid'));
    //() => this.props.setNavigation('main');
    if (event.target.value < 0) return;
    this.props.changeCart(Number(event.target.value), Number(event.target.getAttribute('data-pid')));
    console.log("ID: "+Number(event.target.getAttribute('data-pid')));
    console.log("New value: "+Number(event.target.value));
  },
  render: function(){
    var self = this;
    var cart = this.props.cart;
    //console.log(cart);
    var cartRows = cart.map(function(cartElem){
      var Product=self.searchProduct(cartElem.id);
      return (
        <tr key={cartElem.id}>
          <td>
            <img className="cart_img" src={Product.photoPath+Product.imageFiles[0]} onClick={() => self.refs[cartElem.id].showPopup()}/>
          </td>
          <td>
            {Product.caption}
          </td>
          <td>
            {Product.price}
          </td>
          <td>
            <input className="num_input" value={cartElem.count} autoComplete="off" type="number" name="quantity" data-pid={cartElem.id} onChange={self.onChange}/>
          </td>
          <td>
            <button className="buttons" onClick={() => self.props.delFromCart(cartElem.id)}>Удалить</button>
            <Popup ref={cartElem.id} addToCart={self.props.addToCart} id={cartElem.id} flag='1'/>
          </td>
        </tr>
      )
    });
    return(
      <div className="cartPage">
        <div className="cartContent">
          <table className="cartTable">
            <thead>
              <tr>
                <th>

                </th>
                <th>
                  Название
                </th>
                <th>
                  Цена
                </th>
                <th>
                  Количество
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              {cartRows}
            </tbody>
          </table>
          <br/>
          <span className="totalCart"> Сумма: {this.props.summ} руб.</span>
        </div>
        <div className="orderForm">
          <input className="oInputs" type="text" placeholder="ваше имя" /><br/>
          <input className="oInputs" type="email" placeholder="почта" /><br/>
          <input className="oInputs" type="tel" placeholder="телефон" /><br/>
          <textarea cols='25' rows='4' placeholder="коммент"/><br/>
          <button className="oInputs buttons">Отправить</button>
        </div>
      </div>
    )
  }
});

module.exports = Cart;
