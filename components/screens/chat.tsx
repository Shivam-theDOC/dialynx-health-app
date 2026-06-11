'use client'

import type { Screen } from '@/lib/data'
import { chatMessages } from '@/lib/data'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronLeft, Phone, Send, Plus } from 'lucide-react'

const quickReplies = [
  'Share pre-op checklist',
  'Reschedule appointment',
  'Insurance status',
  'Pharmacy nearby',
]

export function ChatScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="flex h-full flex-col">
      {/* coordinator profile header */}
      <header className="flex items-center gap-3 px-5 pb-3 pt-14">
        <button
          onClick={() => onNavigate('dashboard')}
          aria-label="Go back"
          className="flex size-10 shrink-0 items-center justify-center rounded-full glass-card text-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div className="relative">
          <Image
            src="/coordinator.png"
            alt="Sneha Kapoor"
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-heading text-base font-semibold text-foreground">
            Sneha Kapoor
          </p>
          <p className="text-[12px] text-primary">Care Coordinator · Online</p>
        </div>
        <button
          aria-label="Call coordinator"
          className="flex size-10 items-center justify-center rounded-full glass-card text-primary"
        >
          <Phone className="size-4" />
        </button>
      </header>

      {/* messages */}
      <div className="no-scrollbar flex-1 space-y-3 overflow-y-auto px-5 py-3">
        <p className="text-center text-[11px] text-muted-foreground">Today</p>
        {chatMessages.map((m, i) => {
          const mine = m.from === 'me'
          return (
            <div
              key={i}
              className={cn('flex', mine ? 'justify-end' : 'justify-start')}
            >
              <div
                className={cn(
                  'max-w-[78%] rounded-[20px] px-4 py-2.5',
                  mine
                    ? 'rounded-br-md bg-primary text-primary-foreground'
                    : 'rounded-bl-md glass-card text-secondary-foreground',
                )}
              >
                <p className="text-[13px] leading-relaxed">{m.text}</p>
                <p
                  className={cn(
                    'mt-1 text-[10px]',
                    mine ? 'text-primary-foreground/60' : 'text-muted-foreground',
                  )}
                >
                  {m.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* quick suggestions */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-2">
        {quickReplies.map((q) => (
          <button
            key={q}
            className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-2 text-[12px] font-medium text-primary"
          >
            {q}
          </button>
        ))}
      </div>

      {/* input */}
      <div className="flex items-center gap-2 px-5 pb-6 pt-1">
        <button
          aria-label="Add attachment"
          className="flex size-11 shrink-0 items-center justify-center rounded-full glass-card text-secondary-foreground"
        >
          <Plus className="size-5" />
        </button>
        <div className="flex flex-1 items-center rounded-full glass-card px-4 py-3">
          <input
            placeholder="Message Sneha..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
        <button
          aria-label="Send message"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <Send className="size-5" />
        </button>
      </div>
    </div>
  )
}
