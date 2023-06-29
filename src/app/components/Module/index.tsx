import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { Lesson } from './Lesson'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger className="flex w-full items-center gap-3  bg-sky-800 p-4 ">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-zinc-300 bg-sky-950 text-xs transition-transform ease-in-out group-data-[state=open]:border">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-300">{amountOfLessons} aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-300 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
          <Lesson title="Fundamentos do Redux" duration="09:15" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
