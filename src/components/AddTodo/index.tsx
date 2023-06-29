'use client'

import { FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(event: FormEvent) {
    event.preventDefault()

    console.log(newTodo)
  }

  return (
    <form
      onSubmit={handleNewTodo}
      className="w-64 flex flex-col items-center justify-center gap-3"
    >
      <input
        type="text"
        placeholder="Adicione um novo Todo"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className="p-2 text-gray-900"
      />
      <button
        type="submit"
        className="bg-slate-200 text-gray-800 font-bold hover:bg-slate-400 py-1 px-5 rounded-sm"
      >
        Adicionar
      </button>
    </form>
  )
}
