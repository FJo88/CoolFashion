import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        title: "Black T-Shirt",
        brand: "Levis",
        price: 123,
        category: "Shirts",
        imageurl: "https://placehold.jp/300x400.png",
        description: "Lorem ipsum dolor",
      },
      {
        id: 2,
        title: 'Red Jacket',
        brand: 'Levis',
        price: 599,
        category: 'Jackets',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem ipsum dolor',
      },
      {
        id: 3,
        title: 'Black Jacket',
        brand: 'Levis',
        price: 699,
        category: 'Jackets',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem dolor ipsum',
      },
      {
        id: 4,
        title: 'Blue Jacket',
        brand: 'Tommy Hilfiger',
        price: 799,
        category: 'Jackets',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
      {
        id: 5,
        title: 'Green Jacket',
        brand: 'Levis',
        price: 599,
        category: 'Jackets',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
      {
        id: 6,
        title: 'Cool Dress',
        brand: 'Levis',
        price: 599,
        category: 'Dresses',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
      {
        id: 7,
        title: 'White Dress',
        brand: 'Levis',
        price: 599,
        category: 'Dresses',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
      {
        id: 8,
        title: 'Black Dress',
        brand: 'Levis',
        price: 599,
        category: 'Dresses',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
      {
        id: 9,
        title: 'Cool necklace',
        brand: 'Levis',
        price: 1999,
        category: 'Accessories',
        imageurl: 'https://placehold.jp/300x400.png',
        description: 'lorem',
      },
    ],
    latestId: 5,
    status: null
  },
  reducers: {
      addProduct: (state, action) => {
        state.products = state.products.concat(action.payload)
        console.log(state.products)
      }
    },

});

export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
