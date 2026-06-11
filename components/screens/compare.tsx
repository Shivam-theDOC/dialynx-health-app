'use client'

import type { Screen } from '@/lib/data'
import { doctors } from '@/lib/data'
import { ScreenHeader, ScreenScroll } from '@/components/screen-header'
import Image from 'next/image'
import { Star } from 'lucide-react'

const rows: { label: string; render: (d: (typeof doctors)[number]) => string; highlight?: boolean }[] = [
  { label: 'Consultation Fee', render: (d) => `₹${d.fee}` },
  { label: 'Experience', render: (d) => `${d.experience} yrs` },
  { label: 'Hospital', render: (d) => d.hospital },
  { label: 'Rating', render: (d) => `${d.rating} (${d.reviews})` },
  { label: 'Success Rate', render: (d) => `${d.successRate}%`, highlight: true },
  { label: 'Next Slot', render: (d) => d.nextSlot },
]

export function CompareScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [a, b] = doctors

  return (
    <ScreenScroll>
      <ScreenHeader
        title="Compare Doctors"
        subtitle="Cardiology specialists"
        onBack={() => onNavigate('doctors')}
      />

      <div className="px-5 pt-2">
        {/* doctor heads */}
        <div className="grid grid-cols-2 gap-3">
          {[a, b].map((d) => (
            <div key={d.id} className="rounded-[22px] glass-card p-3 text-center">
              <Image
                src={d.image}
                alt={d.name}
                width={56}
                height={56}
                className="mx-auto size-14 rounded-2xl object-cover"
              />
              <p className="mt-2 truncate text-[13px] font-medium text-foreground">
                {d.name}
              </p>
              <p className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
                <Star className="size-3 fill-primary text-primary" />
                {d.rating}
              </p>
            </div>
          ))}
        </div>

        {/* comparison rows */}
        <div className="mt-4 overflow-hidden rounded-[22px] glass-card">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={i % 2 === 0 ? 'bg-transparent' : 'bg-secondary/30'}
            >
              <p className="px-4 pt-3 text-center text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {row.label}
              </p>
              <div className="grid grid-cols-2">
                {[a, b].map((d) => (
                  <p
                    key={d.id}
                    className={
                      row.highlight
                        ? 'px-3 pb-3 pt-1 text-center text-sm font-semibold text-primary'
                        : 'px-3 pb-3 pt-1 text-center text-sm font-medium text-foreground'
                    }
                  >
                    {row.render(d)}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* recommendation */}
        <div className="mt-4 rounded-[22px] border border-primary/30 bg-primary/10 p-4">
          <p className="text-[12px] font-semibold text-primary">Recommended</p>
          <p className="mt-1 text-[13px] leading-relaxed text-secondary-foreground">
            {a.name} has the highest success rate and the earliest available slot for your
            condition.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="rounded-2xl glass-card py-3.5 text-sm font-medium text-secondary-foreground">
            Book {b.name.split(' ')[1]}
          </button>
          <button className="rounded-2xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground">
            Book {a.name.split(' ')[1]}
          </button>
        </div>
      </div>
    </ScreenScroll>
  )
}
