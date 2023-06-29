import { configureStore, createSlice } from '@reduxjs/toolkit'

// Aqui é um pedaço do estado que chamamos de slice ou fatia
const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Jogar Game', 'Tomar cerveja'],

  reducers: {},
})

export const store = configureStore({
  // Aqui onde ficará todas as informações que serão compartilhadas, que são as fatias do estado
  reducer: {
    // todo => Nome do reducer definido pelo programador
    todo: todoSlice.reducer,
  },
})
