'use client'

import { useState } from 'react'
import type { Screen } from '@/lib/data'
import { healthRecords } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import { cn } from '@/lib/utils'
import { FileText, FlaskConical, ClipboardList, Shield, Download } from 'lucide-react'

const tabs = [
  { key: 'Prescriptions', icon: FileText },
  { key: 'Lab Reports', icon: FlaskConical },
  { key: 'Discharge Summaries', icon: ClipboardList },
  { key: 'Insurance Documents', icon: Shield },
] as const

type TabKey = (typeof tabs)[number]['key']

export function RecordsScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [active, setActive] = useState<TabKey>('Prescriptions')
  const records = healthRecords[active]
  const ActiveIcon = tabs.find((t) => t.key === active)!.icon

  return (
    <ScreenScroll>
      <ScreenHeader title="Health Records" subtitle="All your documents, secured" />

      <div className="px-5 pt-2">
        {/* tab grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {tabs.map((t) => {
            const Icon = t.icon
            const isActive = active === t.key
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  'flex items-center gap-2.5 rounded-2xl p-3 text-left transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card text-secondary-foreground',
                )}
              >
                <Icon className="size-5 shrink-0" />
                <span className="text-[12px] font-medium leading-tight">{t.key}</span>
              </button>
            )
          })}
        </div>

        {/* records list */}
        <div className="mt-5 space-y-3">
          <p className="px-1 text-[13px] font-semibold text-secondary-foreground">
            {active}
          </p>
          {records.map((r) => (
            <article
              key={r.title}
              className="flex items-center gap-3 rounded-[20px] glass-card p-3.5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <ActiveIcon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{r.title}</p>
                <p className="truncate text-[12px] text-muted-foreground">
                  {r.by} · {r.date}
                </p>
              </div>
              <button
                aria-label={`Download ${r.title}`}
                className="flex size-9 items-center justify-center rounded-xl bg-secondary/60 text-primary"
              >
                <Download className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </ScreenScroll>
  )
}
