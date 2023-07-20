import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

import { next, useCurrentLesson } from '@/store/slices/player'
import { useAppDispatch, useAppSelector } from '@/store'

const Player = dynamic(() => import('react-player'), {
  ssr: false,
})

export function Video() {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-sky-950">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="w7 h-7 animate-spin text-sky-400" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
