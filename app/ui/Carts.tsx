"use client";

import { useCart } from "../providers/CartProvider";

export default function Carts() {
  const { cartItem, isOpen, setIsOpen, deleteCartItem } = useCart();
const totalCart = cartItem.reduce((total, item) =>{
return total + (item.price * item.count)
}, 0)
  
  return (
    <>
      <div className="cart" style={{ display: isOpen ? "flex" : "none" }}>
        <div className="cart-body">
          <div className="cart-title">Корзина</div>
          <div className="cart-total">
            Общая сумма: <span>{totalCart}</span> руб
          </div>

          <div className="cart-wrapper">
            {cartItem.map((item) => (
              <div className="card" key={item.id}>
                {item.sale ? <div className="card-sale">🔥Hot Sale🔥</div> : ""}
                <div className="card-img-wrapper">
                  <span
                    className="card-img-top"
                    style={{ backgroundImage: `url('${item.img}')` }}
                  ></span>
                </div>
                <div className="card-body justify-content-between">
                  <div className="card-price">${item.price} ₽ * {item.count} = {item.price * item.count} ₽ </div>
                  <h5 className="card-title">${item.title}</h5>
                  <button className="btn btn-primary" onClick={()=> deleteCartItem(item) }>Удалить</button>
                </div>
              </div>
            ))}

{!cartItem.length ? (
    <div id="cart-empty">Ваша корзина пока пуста</div>
) : null}
            
          </div>
          <button className="btn btn-primary cart-confirm" onClick={()=> setIsOpen(false)}>
            Оформить заказ
          </button>
          <div className="cart-close" onClick={() => setIsOpen(!isOpen)}></div>
        </div>
      </div>
    </>
  );
}
