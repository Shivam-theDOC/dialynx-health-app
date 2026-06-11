'use client'

import { cn } from '@/lib/utils'
import { ChevronLeft } from 'lucide-react'
import type { ReactNode } from 'react'

export function ScreenHeader({
  title,
  subtitle,
  onBack,
  action,
}: {
  title: string
  subtitle?: string
  onBack?: () => void
  action?: ReactNode
}) {
  return (
    <header className="flex items-center gap-3 px-5 pb-2 pt-14">
      {onBack && (
        <button
          onClick={onBack}
          aria-label="Go back"
          className="flex size-10 shrink-0 items-center justify-center rounded-full glass-card text-foreground"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="truncate font-heading text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="truncate text-[13px] text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action}
    </header>
  )
}

export function ScreenScroll({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'no-scrollbar h-full overflow-y-auto pb-28',
        className,
      )}
    >
      {children}
    </div>
  )
}
