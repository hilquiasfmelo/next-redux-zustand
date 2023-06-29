import { configureStore, createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

// Aqui é um pedaço do estado que chamamos de slice ou fatia
const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Jogar Valorant', 'Estudar Redux'],

  // Aqui ficará quais ações a interface/usuário poderá fazer dentro desse estado/fatia
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
})

export const store = configureStore({
  // Aqui onde ficará todas as informações que serão compartilhadas, que são as fatias do estado
  reducer: {
    // todo => Nome do reducer definido pelo programador
    todo: todoSlice.reducer,
  },
})

// Exportando as ações das fatias do reducer, para que os componentes tenham acesso as mesmas
export const { add } = todoSlice.actions

// Exportando um useSelector customizado para que o Typescript entenda as tipagens do estado global
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
