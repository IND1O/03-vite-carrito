const CartItem = ({ data, eliminarCarrito }) => {
  let { id, name, price, quantity } = data;

  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>
        ARS ${price}.00 x {quantity} = ARS ${price * quantity}.00
      </h5>
      <button onClick={() => eliminarCarrito(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => eliminarCarrito(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
