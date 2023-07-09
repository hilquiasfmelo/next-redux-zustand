import { useDispatch } from 'react-redux'
import dynamic from 'next/dynamic'

import { next, useCurrentLesson } from '@/store/slices/player'

const Player = dynamic(() => import('react-player'), {
  ssr: false,
})

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-sky-950">
      <Player
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
