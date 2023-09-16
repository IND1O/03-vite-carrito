export const ProductItems = ({ data, agregarCarrito }) => {
  let { id, name, price } = data;

  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>ARS ${price}.00</h5>
      <button onClick={() => agregarCarrito(id)}>Agregar al carrito</button>
    </div>
  );
};
