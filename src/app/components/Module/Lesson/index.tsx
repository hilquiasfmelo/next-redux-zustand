import { Film } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-300 data-[active=true]:text-emerald-500 enabled:hover:text-zinc-50"
    >
      <Film
        data-active={isCurrent}
        className="h-4 w-4 text-zinc-300 data-[active=true]:text-emerald-500 enabled:hover:text-zinc-50"
      />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-300">
        {duration}
      </span>
    </button>
  )
}
