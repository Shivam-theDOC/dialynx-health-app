'use client'

import type { Screen } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import { ShieldCheck, CheckCircle2, Hospital, CreditCard } from 'lucide-react'

export function InsuranceScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const total = 1500000
  const used = 660000
  const remaining = total - used
  const pct = Math.round((remaining / total) * 100)

  return (
    <ScreenScroll>
      <ScreenHeader
        title="Insurance Eligibility"
        subtitle="Star Health · Family Floater"
        onBack={() => onNavigate('dashboard')}
      />

      <div className="space-y-4 px-5 pt-2">
        {/* policy entry */}
        <div className="rounded-[24px] glass-card p-4">
          <label className="text-[12px] font-medium text-muted-foreground">
            Policy Number
          </label>
          <div className="mt-2 flex items-center gap-2.5 rounded-2xl bg-secondary/50 px-4 py-3">
            <CreditCard className="size-4 text-primary" />
            <input
              defaultValue="STAR-FH-2026-884213"
              className="w-full bg-transparent text-sm font-medium tracking-wide text-foreground focus:outline-none"
            />
          </div>
          <button className="mt-3 w-full rounded-2xl bg-primary py-3 text-sm font-semibold text-primary-foreground">
            Check Eligibility
          </button>
        </div>

        {/* cashless eligibility status */}
        <div className="flex items-center gap-3 rounded-[24px] border border-primary/30 bg-primary/10 p-4">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <CheckCircle2 className="size-6" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Cashless Eligible</p>
            <p className="text-[12px] text-muted-foreground">
              Approved for network hospitals
            </p>
          </div>
        </div>

        {/* coverage card */}
        <div className="rounded-[24px] bg-primary p-5 text-primary-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5" />
            <span className="text-sm font-semibold">Total Coverage</span>
          </div>
          <p className="mt-3 font-heading text-3xl font-bold tracking-tight">
            ₹15,00,000
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary-foreground/20">
            <div
              className="h-full rounded-full bg-primary-foreground"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[12px] font-medium opacity-80">
            <span>Used ₹{(used / 100000).toFixed(1)}L</span>
            <span>{pct}% available</span>
          </div>
        </div>

        {/* remaining amount + hospitals */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[24px] glass-card p-4">
            <p className="text-[12px] text-muted-foreground">Remaining Amount</p>
            <p className="mt-2 font-heading text-2xl font-bold text-primary">
              ₹{(remaining / 100000).toFixed(1)}L
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Valid till 31 Dec 2026
            </p>
          </div>
          <div className="rounded-[24px] glass-card p-4">
            <Hospital className="size-5 text-primary" />
            <p className="mt-2 font-heading text-2xl font-bold text-foreground">
              4,200+
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Network hospitals nearby
            </p>
          </div>
        </div>

        {/* covered items */}
        <div className="rounded-[24px] glass-card p-4">
          <p className="mb-3 text-[13px] font-semibold text-secondary-foreground">
            What&apos;s covered
          </p>
          <ul className="space-y-2.5">
            {['Hospitalization & Surgery', 'Pre & Post Hospitalization', 'Day Care Procedures', 'Ambulance Charges'].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13px] text-secondary-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </ScreenScroll>
  )
}
