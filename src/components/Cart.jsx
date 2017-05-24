//var ProductsDB = require('../../public/data/ProductsDB.jsx');
var Popup = require('./Product/Popup.jsx');

var React = require('react');

import jQuery from 'jquery';


//********************************ДИЧЬ*************************************************************
//********************************КОНЕЦ ДИЧИ*************************************************************

var Cart = React.createClass({
  getInitialState: function(){
    return {
      orderJustDone: false
    }
  },
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
  sendMail: function(){
    var self = this;
    jQuery.ajax({
      url:     'http://mirt.spb.ru/sendMail.php', //url страницы (action_ajax_form.php)
      type:     "POST", //метод отправки
      dataType: "html", //формат данных
      data: jQuery("#orderForm").serialize(),  // Сеарилизуем объект
      success: function(response) { //Данные отправлены успешно
        self.setState({orderJustDone: true});
        self.props.updateLastOrder(self.props.cart);
        self.props.onReset();
        self.props.setCustomHeader("Спасибо за заказ!");
  	  },
    	error: function(response) { // Данные не отправлены
    		alert('ERR');
    	}
	  });
  },
  render: function(){
    var self = this;
    var cart = this.props.cart;
    //console.log(cart);
    var cartRows = cart.map(function(cartElem){
      var Product=self.searchProduct(cartElem.id);
      return (
        <tr className="spacing" key={cartElem.id}>
          <td className="hidden-xs">
            <img className="cart_img" src={Product.photoPath+Product.imageFiles[0]} onClick={() => self.refs[cartElem.id].showPopup()}/>
          </td>
          <td>
            {Product.caption}
          </td>
          <td>
            {Product.price+" руб."}
          </td>
          <td>
            <input className="num_input" value={cartElem.count} autoComplete="off" type="number" name="quantity" data-pid={cartElem.id} onChange={self.onChange}/>
          </td>
          <td>
            <img className="imageButton" src="images/remove2.png" height="30px" onClick={() => self.props.delFromCart(cartElem.id)}/>
            {/*<button className="buttons" onClick={() => self.props.delFromCart(cartElem.id)}>Удалить</button>*/}
            <Popup ref={cartElem.id} addToCart={self.props.addToCart} id={cartElem.id} flag='1'/>
          </td>
        </tr>
      )
    });
    return(
      <div>
        <div className="cartContent col-md-8">
          {this.props.cartTotalItems > 0 &&
            <div>
            <table className="cartTable">
              <thead>
                <tr>
                  <th className="hidden-xs" width="20%">

                  </th>
                  <th width="40%">
                    Название
                  </th>
                  <th width="25%">
                    Цена
                  </th>
                  <th width="30%">
                    Кол-во
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
        }
        {((this.props.cartTotalItems == 0) && (!this.state.orderJustDone)) &&
          <div className="about">
            Ваша корзина пуста!
          </div>
        }
        {((this.props.cartTotalItems == 0) && (this.state.orderJustDone)) &&
          <div>
            Мы свяжемся в Вами в ближайшее время. Информация о вашем последнем заказе доступна в меню.
          </div>
        }
        </div>
        <div className="orderForm col-md-3 col-md-offset-1">
          <h3>Форма заказа: </h3>
          <form id="orderForm" action="" method="post">
            Ваше имя:
            <input className="oInputs" type="text" placeholder="Ваше имя" name="name"/><br/>
            E-mail:
            <input className="oInputs" type="email" placeholder="ivan.ivanov@gmail.com" name="email"/><br/>
            Контактный телефон:
            <input className="oInputs" type="tel" placeholder="+7 xxx-xxx-xx-xx" name="phone"/><br/>
            Комментарий к заказу:<br/>
            <textarea cols='25' rows='4' placeholder="Комментарий к заказу" name="comment"/><br/>
            <input type="hidden" name="productsList" value={JSON.stringify(cart)}/>
            <input type="hidden" name="totalPrice" value={this.props.summ}/>
            <button type="button" onClick={this.sendMail} className="oInputs buttons" disabled={(this.props.cartTotalItems == 0)}>Отправить заказ</button>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Cart;
