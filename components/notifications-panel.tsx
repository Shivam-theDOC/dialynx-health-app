'use client'

import { notifications } from '@/lib/data'
import {
  X,
  CalendarClock,
  ShieldCheck,
  FlaskConical,
  MessageCircle,
  Wallet,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  appointment: CalendarClock,
  insurance: ShieldCheck,
  report: FlaskConical,
  chat: MessageCircle,
  payment: Wallet,
}

export function NotificationsPanel({ onClose }: { onClose: () => void }) {
  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <div className="absolute inset-0 z-30">
      {/* backdrop */}
      <button
        aria-label="Close notifications"
        onClick={onClose}
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
      />

      {/* sheet */}
      <div className="absolute inset-x-0 top-0 flex max-h-[88%] flex-col rounded-b-[28px] glass-card pt-12">
        <header className="flex items-center justify-between px-5 pb-3">
          <div>
            <h2 className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Notifications
            </h2>
            <p className="text-[12px] text-muted-foreground">
              {unreadCount} new updates
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex size-10 items-center justify-center rounded-full bg-secondary/60 text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="no-scrollbar flex-1 space-y-2.5 overflow-y-auto px-4 pb-6">
          {notifications.map((n) => {
            const Icon = iconMap[n.type]
            return (
              <div
                key={n.id}
                className="flex items-start gap-3 rounded-2xl bg-secondary/50 p-3.5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {n.title}
                    </p>
                    {n.unread && (
                      <span className="size-2 shrink-0 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
                    {n.detail}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium text-primary/80">
                    {n.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
