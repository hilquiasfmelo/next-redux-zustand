import dynamic from 'next/dynamic'

const Player = dynamic(() => import('react-player'), {
  ssr: false,
})

export function Video() {
  return (
    <div className="aspect-video w-full bg-sky-950">
      <Player
        width="100%"
        height="100%"
        controls
        url="https://www.youtube.com/watch?v=orgWnQSlFuo"
      />
    </div>
  )
}
