'use client'

import { useState } from 'react'
import type { Screen } from '@/lib/data'
import { ScreenScroll } from '@/components/screen-header'
import { NotificationsPanel } from '@/components/notifications-panel'
import Image from 'next/image'
import {
  ShieldCheck,
  CalendarClock,
  FileHeart,
  Stethoscope,
  FlaskConical,
  Activity,
  Umbrella,
  ChevronRight,
  Bell,
} from 'lucide-react'

const quickActions = [
  { label: 'Find Doctor', icon: Stethoscope, screen: 'doctors' as Screen },
  { label: 'Diagnostics', icon: FlaskConical, screen: 'diagnostics' as Screen },
  { label: 'Surgery', icon: Activity, screen: 'surgery-estimator' as Screen },
  { label: 'Insurance', icon: Umbrella, screen: 'insurance' as Screen },
]

export function DashboardScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <ScreenScroll>
      {/* greeting */}
      <header className="flex items-center justify-between px-5 pb-3 pt-14">
        <div className="flex items-center gap-3">
          <Image
            src="/user-avatar.png"
            alt="Shivam Singh"
            width={48}
            height={48}
            className="size-12 rounded-full object-cover ring-2 ring-primary/30"
          />
          <div>
            <p className="text-[13px] text-muted-foreground">Good morning</p>
            <p className="font-heading text-lg font-semibold leading-tight text-foreground">
              Shivam Singh
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowNotifications(true)}
          aria-label="Notifications"
          className="relative flex size-11 items-center justify-center rounded-full glass-card text-foreground"
        >
          <Bell className="size-5" />
          <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-primary" />
        </button>
      </header>

      <div className="space-y-4 px-5 pt-2">
        {/* insurance status card */}
        <button
          onClick={() => onNavigate('insurance')}
          className="block w-full overflow-hidden rounded-[24px] bg-primary p-5 text-left text-primary-foreground"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-5" />
              <span className="text-sm font-semibold">Insurance Active</span>
            </div>
            <span className="rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold">
              Cashless
            </span>
          </div>
          <p className="mt-5 text-[12px] font-medium opacity-70">Available coverage</p>
          <p className="font-heading text-3xl font-bold tracking-tight">₹8,40,000</p>
          <div className="mt-4 flex items-center justify-between text-[12px] font-medium">
            <span className="opacity-80">Star Health · Family Floater</span>
            <span className="flex items-center gap-1 opacity-80">
              View details <ChevronRight className="size-3.5" />
            </span>
          </div>
        </button>

        {/* upcoming appointment */}
        <section className="glass-card rounded-[24px] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-[13px] font-semibold text-secondary-foreground">
              <CalendarClock className="size-4 text-primary" /> Upcoming Appointment
            </span>
            <span className="text-[11px] font-medium text-primary">Today</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/doctors/WhatsApp Image 2026-06-12 at 05.47.13.jpeg"
              alt="Dr. Raj Kumar"
              width={52}
              height={52}
              className="size-13 h-[52px] w-[52px] rounded-2xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-foreground">Dr. Raj Kumar</p>
              <p className="truncate text-[12px] text-muted-foreground">
                Interventional Cardiologist
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-primary">4:30 PM</p>
              <p className="text-[11px] text-muted-foreground">Video consult</p>
            </div>
          </div>
        </section>

        {/* recent health records */}
        <button
          onClick={() => onNavigate('records')}
          className="block w-full glass-card rounded-[24px] p-4 text-left"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-[13px] font-semibold text-secondary-foreground">
              <FileHeart className="size-4 text-primary" /> Recent Health Records
            </span>
            <ChevronRight className="size-4 text-muted-foreground" />
          </div>
          <div className="flex gap-2.5">
            {[
              { t: 'Lipid Profile', d: '10 Mar' },
              { t: 'Cardiac Plan', d: '12 Mar' },
              { t: 'Pre-auth', d: '13 Mar' },
            ].map((r) => (
              <div
                key={r.t}
                className="flex-1 rounded-2xl bg-secondary/60 px-3 py-3"
              >
                <p className="text-[12px] font-medium leading-tight text-secondary-foreground">
                  {r.t}
                </p>
                <p className="mt-1 text-[10px] text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </button>

        {/* quick actions */}
        <section className="pt-1">
          <h2 className="mb-3 px-1 text-[13px] font-semibold text-secondary-foreground">
            Quick Actions
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {quickActions.map((a) => {
              const Icon = a.icon
              return (
                <button
                  key={a.label}
                  onClick={() => onNavigate(a.screen)}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="flex size-[60px] items-center justify-center rounded-[20px] glass-card text-primary">
                    <Icon className="size-6" />
                  </span>
                  <span className="text-center text-[11px] font-medium leading-tight text-secondary-foreground">
                    {a.label}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* care coordinator promo */}
        <button
          onClick={() => onNavigate('chat')}
          className="flex w-full items-center gap-3 rounded-[24px] glass-card p-4 text-left"
        >
          <Image
            src="/coordinator.png"
            alt="Sneha Kapoor"
            width={46}
            height={46}
            className="size-11 rounded-full object-cover ring-2 ring-primary/30"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-foreground">Talk to Sneha</p>
            <p className="truncate text-[12px] text-muted-foreground">
              Your dedicated care coordinator
            </p>
          </div>
          <span className="rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground">
            Chat
          </span>
        </button>
      </div>

      {showNotifications && (
        <NotificationsPanel onClose={() => setShowNotifications(false)} />
      )}
    </ScreenScroll>
  )
}
