import { TYPES } from "../action/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: "100" },
    { id: 2, name: "Producto 2", price: "200" },
    { id: 3, name: "Producto 3", price: "300" },
    { id: 4, name: "Producto 4", price: "400" },
    { id: 5, name: "Producto 5", price: "500" },
    { id: 6, name: "Producto 6", price: "600" },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.AGREGAR_AL_CARRITO: {
      let item = state.products.find((x) => x.id === action.payload);
      //console.log("Reducer res ==>", res);
      let itemDuplicado = state.cart.find((x) => x.id === item.id);

      return itemDuplicado
        ? {
            ...state,
            cart: state.cart.map((x) =>
              x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...item, quantity: 1 }],
          };

      //   return {
      //     ...state,
      //     cart: [...state.cart, item],
      //   };
    }
    case TYPES.ELIMINAR_UNO_DEL_CARRITO: {
      let res = state.cart.find((x) => x.id === action.payload);

      return res.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((x) =>
              x.id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload),
          };
    }
    case TYPES.ELIMINAR_TODO_DEL_CARRITO: {
      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== action.payload),
      };
    }
    case TYPES.LIMPIAR_EL_CARRITO:
      return shoppingInitialState;
    default:
      return state;
  }
}
