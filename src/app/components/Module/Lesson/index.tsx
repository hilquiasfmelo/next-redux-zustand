import { Film } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-300">
      <Film className="h-4 w-4 text-zinc-300" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-300">
        {duration}
      </span>
    </button>
  )
}
