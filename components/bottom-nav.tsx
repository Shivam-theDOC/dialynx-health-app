'use client'

import { cn } from '@/lib/utils'
import type { Screen } from '@/lib/data'
import { Home, Stethoscope, Activity, FileText, User } from 'lucide-react'

const items: { id: Screen; label: string; icon: typeof Home }[] = [
  { id: 'dashboard', label: 'Home', icon: Home },
  { id: 'doctors', label: 'Doctors', icon: Stethoscope },
  { id: 'surgery-estimator', label: 'Surgery', icon: Activity },
  { id: 'records', label: 'Records', icon: FileText },
  { id: 'chat', label: 'Profile', icon: User },
]

export function BottomNav({
  active,
  onNavigate,
}: {
  active: Screen
  onNavigate: (s: Screen) => void
}) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-2">
      <div className="glass-card flex items-center justify-between rounded-[26px] px-3 py-2.5">
        {items.map((item) => {
          const isActive = active === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'flex flex-1 flex-col items-center gap-1 rounded-2xl py-1.5 transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground',
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <span
                className={cn(
                  'flex h-9 w-12 items-center justify-center rounded-2xl transition-all',
                  isActive && 'bg-primary/15',
                )}
              >
                <Icon className="size-[20px]" strokeWidth={isActive ? 2.4 : 2} />
              </span>
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
