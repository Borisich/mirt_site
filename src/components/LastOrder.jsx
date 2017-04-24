
var Popup = require('./Product/Popup.jsx');

var React = require('react');




var LastOrder = React.createClass({
  searchProduct: function(id){
    for (var i=0; i<this.props.DB.length; i++){
      if (this.props.DB[i].id == id) {
        return this.props.DB[i]
        break;
      }
    }
    return null;
  },
  componentDidMount: function(){
    if (this.props.lastOrder.length == 0){
      this.props.setCustomHeader("Заказы отсутствуют!");
    };
  },
  render: function(){
    var self = this;
    var lastOrder = this.props.lastOrder;

    var lastOrderRows = lastOrder.map(function(elem){
      var Product=self.searchProduct(elem.id);
      return (
        <tr key={elem.id}>
          <td>
            <img className="cart_img" src={Product.photoPath+Product.imageFiles[0]} onClick={() => self.refs[elem.id].showPopup()}/>
          </td>
          <td>
            {Product.caption}
          </td>
          <td>
            {Product.price+" руб."}
          </td>
          <td>
            {elem.count}
            <Popup ref={elem.id} addToCart={self.props.addToCart} id={elem.id} flag='1'/>
          </td>
        </tr>
      )
    });
    console.log("self.props.lastOrder: ");
    console.log(self.props.lastOrder);
    return(
      <div className="cartPage">
        <div className="cartContent">
          {this.props.lastOrder.length > 0 &&
            <div>
            <table className="cartTable">
              <thead>
                <tr>
                  <th width="20%">

                  </th>
                  <th width="40%">
                    Название
                  </th>
                  <th width="15%">
                    Цена
                  </th>
                  <th width="10%">
                    Кол-во
                  </th>
                </tr>
              </thead>
              <tbody>
                {lastOrderRows}
              </tbody>
            </table>
            <br/>
            <span className="totalCart"> Сумма: {this.props.summ} руб.</span>
          </div>
        }
        {(this.props.lastOrder.length == 0) &&
          <div className="about">
            Возможно вы ещё ничего у нас не заказывали!
          </div>
        }
        </div>
      </div>
    )
  }
});

module.exports = LastOrder;
