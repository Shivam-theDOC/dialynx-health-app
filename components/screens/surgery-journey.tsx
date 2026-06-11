'use client'

import type { Screen } from '@/lib/data'
import { journeySteps } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export function SurgeryJourneyScreen({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void
}) {
  const doneCount = journeySteps.filter((s) => s.status === 'done').length
  const progress = Math.round(
    ((doneCount + 0.5) / journeySteps.length) * 100,
  )

  return (
    <ScreenScroll>
      <ScreenHeader
        title="Surgery Journey"
        subtitle="Coronary Angioplasty"
        onBack={() => onNavigate('surgery-estimator')}
      />

      <div className="px-5 pt-2">
        {/* progress summary */}
        <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
          <p className="text-[12px] font-medium opacity-70">Current stage</p>
          <p className="font-heading text-2xl font-bold tracking-tight">In Surgery</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary-foreground/20">
            <div
              className="h-full rounded-full bg-primary-foreground"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-[12px] font-medium opacity-80">
            {progress}% complete · 2 of 5 stages done
          </p>
        </div>

        {/* timeline */}
        <div className="relative mt-6 pl-2">
          {journeySteps.map((step, i) => {
            const isLast = i === journeySteps.length - 1
            const done = step.status === 'done'
            const active = step.status === 'active'
            return (
              <div key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                {/* connector line */}
                {!isLast && (
                  <span
                    className={cn(
                      'absolute left-[15px] top-8 h-[calc(100%-1rem)] w-0.5',
                      done ? 'bg-primary' : 'bg-border',
                    )}
                  />
                )}
                {/* node */}
                <span
                  className={cn(
                    'relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full',
                    done && 'bg-primary text-primary-foreground',
                    active && 'bg-primary text-primary-foreground ring-4 ring-primary/25',
                    !done && !active && 'glass-card text-muted-foreground',
                  )}
                >
                  {done ? (
                    <Check className="size-4" strokeWidth={3} />
                  ) : active ? (
                    <span className="size-2.5 animate-pulse rounded-full bg-primary-foreground" />
                  ) : (
                    <span className="size-2 rounded-full bg-muted-foreground" />
                  )}
                </span>

                {/* content */}
                <div
                  className={cn(
                    'flex-1 rounded-[20px] p-3.5',
                    active ? 'border border-primary/40 bg-primary/10' : 'glass-card',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={cn(
                        'text-sm font-semibold',
                        active ? 'text-primary' : 'text-foreground',
                      )}
                    >
                      {step.title}
                    </p>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {step.date}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ScreenScroll>
  )
}
