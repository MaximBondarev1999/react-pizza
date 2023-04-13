import { Link } from "react-router-dom";
import imaga from "../../img/empty-cart.png";


const CartEmpry = () => {
   return (
      < div className="container container--cart" >
         <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>
               Вероятней всего, вы не заказывали ещё пиццу.<br />
               Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={imaga} alt="Empty cart" />
            <Link to="/" className="button button--black">
               <span>Вернуться назад</span>
            </Link>
         </div>
      </div >
   )

}
export default CartEmpry;