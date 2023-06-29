import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  // Aqui onde ficará todas as informações que serão compartilhadas, que são as fatias do estado
  reducer: {
    // todo => Nome do reducer definido pelo programador
  },
})

// Exportando as ações das fatias do reducer, para que os componentes tenham acesso as mesmas

// Exportando um useSelector customizado para que o Typescript entenda as tipagens do estado global
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
