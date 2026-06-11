'use client'

import type { Screen } from '@/lib/data'
import { doctors } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import Image from 'next/image'
import { Search, Star, Building2, GitCompareArrows, SlidersHorizontal } from 'lucide-react'

const filters = ['All', 'Cardiology', 'Orthopedics', 'Neurology', 'Dermatology']

export function DoctorsScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <ScreenScroll>
      <ScreenHeader title="Find a Doctor" subtitle="320+ verified specialists" />

      <div className="px-5 pt-2">
        {/* search */}
        <div className="flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2.5 rounded-2xl glass-card px-4 py-3">
            <Search className="size-4 text-muted-foreground" />
            <input
              placeholder="Search doctors, specialties..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <button
            aria-label="Filters"
            className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
          >
            <SlidersHorizontal className="size-5" />
          </button>
        </div>

        {/* filter chips */}
        <div className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5">
          {filters.map((f, i) => (
            <button
              key={f}
              className={
                i === 0
                  ? 'shrink-0 rounded-full bg-primary px-4 py-2 text-[12px] font-semibold text-primary-foreground'
                  : 'shrink-0 rounded-full glass-card px-4 py-2 text-[12px] font-medium text-secondary-foreground'
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* compare banner */}
        <button
          onClick={() => onNavigate('compare')}
          className="mt-4 flex w-full items-center justify-between rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3"
        >
          <span className="flex items-center gap-2 text-[13px] font-medium text-foreground">
            <GitCompareArrows className="size-4 text-primary" />
            Compare doctors side by side
          </span>
          <span className="text-[12px] font-semibold text-primary">Open</span>
        </button>

        {/* doctor cards */}
        <div className="mt-4 space-y-3">
          {doctors.map((d) => (
            <article key={d.id} className="rounded-[24px] glass-card p-4">
              <div className="flex gap-3.5">
                <Image
                  src={d.image}
                  alt={d.name}
                  width={64}
                  height={64}
                  className="size-16 rounded-2xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate font-medium text-foreground">{d.name}</h3>
                      <p className="truncate text-[12px] text-muted-foreground">
                        {d.specialty}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary/70 px-2 py-1 text-[11px] font-semibold text-foreground">
                      <Star className="size-3 fill-primary text-primary" />
                      {d.rating}
                    </span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1 truncate text-[12px] text-muted-foreground">
                    <Building2 className="size-3.5" /> {d.hospital}
                  </p>
                </div>
              </div>

              <div className="mt-3.5 flex items-center justify-between border-t border-border pt-3.5">
                <div>
                  <p className="text-[11px] text-muted-foreground">Consultation</p>
                  <p className="font-heading text-base font-semibold text-foreground">
                    ₹{d.fee}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate('compare')}
                    className="rounded-xl glass-card px-4 py-2.5 text-[13px] font-medium text-secondary-foreground"
                  >
                    Compare
                  </button>
                  <button className="rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground">
                    Book
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScreenScroll>
  )
}
