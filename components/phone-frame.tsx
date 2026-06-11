'use client'

import type { ReactNode } from 'react'

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#06031f] p-0 sm:p-6">
      <div className="relative h-screen w-full max-w-[420px] overflow-hidden bg-background sm:h-[896px] sm:rounded-[44px] sm:border-[10px] sm:border-[#241a52] sm:shadow-2xl">
        {/* status bar */}
        <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between px-6 pt-3 text-[12px] font-medium text-foreground">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

function SignalIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
      <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
      <rect x="4.5" y="5" width="3" height="7" rx="1" fill="currentColor" />
      <rect x="9" y="2.5" width="3" height="9.5" rx="1" fill="currentColor" />
      <rect x="13.5" y="0" width="3" height="12" rx="1" fill="currentColor" />
    </svg>
  )
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path d="M8 11.5l2-2.5a2.8 2.8 0 00-4 0l2 2.5z" fill="currentColor" />
      <path d="M3.5 6a6.4 6.4 0 019 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1 3.2a9.9 9.9 0 0114 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg width="26" height="13" viewBox="0 0 26 13" fill="none" aria-hidden="true">
      <rect x="0.5" y="1" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4" />
      <rect x="2" y="2.5" width="16" height="8" rx="1.5" fill="currentColor" />
      <rect x="23" y="4" width="2" height="5" rx="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
