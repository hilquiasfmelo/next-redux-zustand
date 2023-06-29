import { useSelector } from 'react-redux'

export function TodoList() {
  const store = useSelector((store) => {
    return store
  })

  console.log(store)

  return (
    <ul>
      <li>Jogar game</li>
      <li>Tomar cerveja</li>
    </ul>
  )
}
