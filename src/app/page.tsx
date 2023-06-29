import { AddTodo } from '@/components/AddTodo'
import { TodoList } from '@/components/TodoList'

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-8">
      <TodoList />
      <AddTodo />
    </div>
  )
}
