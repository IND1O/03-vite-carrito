import { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import { ProductItems } from "./ProductItems";
import CartItem from "./CartItem";
import { TYPES } from "../action/shoppingAction";

const ShoppingCar = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const agregarCarrito = (id) => {
    //console.log("ID Product ==>", id);
    dispatch({ type: TYPES.AGREGAR_AL_CARRITO, payload: id });
  };

  const eliminarCarrito = (id, todo = false) => {
    //console.log("id y todo ==>", id, todo);
    if (todo) {
      dispatch({ type: TYPES.ELIMINAR_TODO_DEL_CARRITO, payload: id });
    } else {
      dispatch({ type: TYPES.ELIMINAR_UNO_DEL_CARRITO, payload: id });
    }
  };

  const limpiarCarrito = () => {
    dispatch({ type: TYPES.LIMPIAR_EL_CARRITO });
  };

  return (
    <div>
      <h3>Productos:</h3>
      <article className="box grid-responsive">
        {products.map((x) => (
          <ProductItems key={x.id} data={x} agregarCarrito={agregarCarrito} />
        ))}
      </article>
      <h3>Carrito:</h3>

      <article className="box grid-responsive">
        {cart.map((y, index) => (
          <CartItem key={index} data={y} eliminarCarrito={eliminarCarrito} />
        ))}
      </article>
      <button onClick={limpiarCarrito}>Limpiar Carrito</button>
    </div>
  );
};

export default ShoppingCar;
