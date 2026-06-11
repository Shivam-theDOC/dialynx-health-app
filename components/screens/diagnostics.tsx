'use client'

import type { Screen } from '@/lib/data'
import { diagnosticsTests } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import { Search, Home, Clock, BadgeCheck } from 'lucide-react'

export function DiagnosticsScreen({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void
}) {
  return (
    <ScreenScroll>
      <ScreenHeader
        title="Diagnostics"
        subtitle="Compare labs · book home collection"
        onBack={() => onNavigate('dashboard')}
      />

      <div className="space-y-4 px-5 pt-2">
        {/* search */}
        <div className="flex items-center gap-2.5 rounded-2xl glass-card px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            placeholder="Search tests, packages..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>

        {/* home collection banner */}
        <div className="flex items-center gap-3 rounded-[24px] border border-primary/30 bg-primary/10 p-4">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Home className="size-5" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Free Home Collection</p>
            <p className="text-[12px] text-muted-foreground">
              Phlebotomist at your door in 60 mins
            </p>
          </div>
        </div>

        {/* test list with lab comparison */}
        {diagnosticsTests.map((test) => {
          const best = Math.min(...test.labs.map((l) => l.price))
          return (
            <section key={test.name} className="rounded-[24px] glass-card p-4">
              <h3 className="text-sm font-semibold text-foreground">{test.name}</h3>
              <div className="mt-3 space-y-2">
                {test.labs.map((lab) => {
                  const isBest = lab.price === best
                  return (
                    <div
                      key={lab.lab}
                      className={
                        isBest
                          ? 'flex items-center justify-between rounded-2xl border border-primary/40 bg-primary/10 px-3.5 py-3'
                          : 'flex items-center justify-between rounded-2xl bg-secondary/40 px-3.5 py-3'
                      }
                    >
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 text-[13px] font-medium text-foreground">
                          {lab.lab}
                          {isBest && (
                            <span className="flex items-center gap-0.5 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground">
                              <BadgeCheck className="size-2.5" /> BEST
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Clock className="size-3" /> ETA {lab.eta}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-base font-semibold text-foreground">
                          ₹{lab.price}
                        </span>
                        <button className="rounded-xl bg-primary px-3.5 py-2 text-[12px] font-semibold text-primary-foreground">
                          Book
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </ScreenScroll>
  )
}
