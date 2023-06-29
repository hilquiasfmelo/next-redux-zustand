'use client'

import { MessageCircle } from 'lucide-react'

import { Header } from '../Header'
import { Video } from '../Video'
import { Module } from '../Module'

export function Player() {
  return (
    <div className="flex w-[1200px] flex-col gap-6">
      <div className="flex items-center justify-between">
        <Header
          title="Fundamentos do Redux"
          subtitle='Módulo "Desvendando o Redux"'
        />

        <button className="flex items-center gap-2 rounded bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600">
          <MessageCircle className="h-4 w-4" />
          Deixar feedback
        </button>
      </div>

      <main className="relative flex overflow-hidden rounded-lg border border-sky-800 bg-sky-900 pr-80 shadow">
        <div className="flex-1">
          <Video />
        </div>

        <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-sky-900 overflow-y-scroll border-l border-sky-800 bg-sky-900 scrollbar-thin scrollbar-track-sky-950 scrollbar-thumb-sky-800">
          <Module
            moduleIndex={0}
            title="Desvendando o Redux"
            amountOfLessons={10}
          />
          <Module
            moduleIndex={1}
            title="Desvendando o Redux"
            amountOfLessons={10}
          />
          <Module
            moduleIndex={2}
            title="Desvendando o Redux"
            amountOfLessons={10}
          />
        </aside>
      </main>
    </div>
  )
}
