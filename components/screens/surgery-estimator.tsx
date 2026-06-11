'use client'

import type { Screen } from '@/lib/data'
import { surgeryBreakdown } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import { Search, Activity, ShieldCheck, ArrowRight } from 'lucide-react'

export function SurgeryEstimatorScreen({
  onNavigate,
}: {
  onNavigate: (s: Screen) => void
}) {
  const total = surgeryBreakdown.items.reduce((s, i) => s + i.value, 0)
  const covered = Math.round(total * 0.85)
  const outOfPocket = total - covered

  return (
    <ScreenScroll>
      <ScreenHeader title="Surgery Estimator" subtitle="Transparent cost breakdown" />

      <div className="space-y-4 px-5 pt-2">
        {/* condition search */}
        <div className="flex items-center gap-2.5 rounded-2xl glass-card px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            defaultValue="Coronary Angioplasty"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>

        {/* procedure header */}
        <div className="rounded-[24px] glass-card p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Activity className="size-5" />
            </span>
            <div>
              <p className="font-medium text-foreground">{surgeryBreakdown.name}</p>
              <p className="text-[12px] text-muted-foreground">
                {surgeryBreakdown.hospital}
              </p>
            </div>
          </div>
        </div>

        {/* cost breakdown */}
        <div className="rounded-[24px] glass-card p-4">
          <p className="mb-3 text-[13px] font-semibold text-secondary-foreground">
            Cost Breakdown
          </p>
          <div className="space-y-3">
            {surgeryBreakdown.items.map((item) => {
              const barPct = Math.round((item.value / total) * 100)
              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-secondary-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">
                      ₹{item.value.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary/60">
                    <div
                      className="h-full rounded-full bg-primary/70"
                      style={{ width: `${barPct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm font-semibold text-secondary-foreground">
              Estimated Total
            </span>
            <span className="font-heading text-2xl font-bold text-foreground">
              ₹{total.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* insurance split */}
        <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5" />
            <span className="text-sm font-semibold">After Insurance</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[12px] opacity-70">Covered (85%)</p>
              <p className="font-heading text-xl font-bold">
                ₹{covered.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[12px] opacity-70">You pay</p>
              <p className="font-heading text-xl font-bold">
                ₹{outOfPocket.toLocaleString('en-IN')}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('surgery-journey')}
          className="flex w-full items-center justify-center gap-2 rounded-2xl glass-card py-3.5 text-sm font-semibold text-foreground"
        >
          Track Surgery Journey <ArrowRight className="size-4 text-primary" />
        </button>
      </div>
    </ScreenScroll>
  )
}
