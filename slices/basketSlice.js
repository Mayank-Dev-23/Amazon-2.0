import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items[index].quantity += 1;
      } else {
        const tempproduct = { ...action.payload, quantity: 1 };

        toast.success("Added to Cart", {
          position: "bottom-left",
        });
        state.items.push(tempproduct);
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newbasket = [...state.items];
      if (index >= 0) {
        newbasket.splice(index, 1);
      }
      state.items = newbasket;
    },

    decreasequantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newbasket = [...state.items];
      if (state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
        state.items = newbasket;
      } else if (state.items[index].quantity === 1) {
        const nextitems = state.items.filter(
          (item) => item.id !== action.payload.id
        );

        state.items = nextitems;
      }
    },
  },
});

export const { addToBasket, removeFromBasket, decreasequantity } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selecttotal = (state) =>
  state.basket.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  export const  selecttotalitems=(state)=>state.basket.items.reduce((total,item)=>item.quantity+total,0)
export default basketSlice.reducer;
