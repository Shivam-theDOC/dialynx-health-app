'use client'

import { useState } from 'react'
import type { Screen } from '@/lib/data'
import { PhoneFrame } from '@/components/phone-frame'
import { BottomNav } from '@/components/bottom-nav'
import { DashboardScreen } from '@/components/screens/dashboard'
import { DoctorsScreen } from '@/components/screens/doctors'
import { CompareScreen } from '@/components/screens/compare'
import { InsuranceScreen } from '@/components/screens/insurance'
import { SurgeryEstimatorScreen } from '@/components/screens/surgery-estimator'
import { SurgeryJourneyScreen } from '@/components/screens/surgery-journey'
import { DiagnosticsScreen } from '@/components/screens/diagnostics'
import { RecordsScreen } from '@/components/screens/records'
import { ChatScreen } from '@/components/screens/chat'

// Which bottom-nav tab is highlighted for each screen
const navMap: Record<Screen, Screen> = {
  dashboard: 'dashboard',
  doctors: 'doctors',
  compare: 'doctors',
  insurance: 'dashboard',
  'surgery-estimator': 'surgery-estimator',
  'surgery-journey': 'surgery-estimator',
  diagnostics: 'dashboard',
  records: 'records',
  chat: 'chat',
}

export default function Page() {
  const [screen, setScreen] = useState<Screen>('dashboard')

  return (
    <PhoneFrame>
      {screen === 'dashboard' && <DashboardScreen onNavigate={setScreen} />}
      {screen === 'doctors' && <DoctorsScreen onNavigate={setScreen} />}
      {screen === 'compare' && <CompareScreen onNavigate={setScreen} />}
      {screen === 'insurance' && <InsuranceScreen onNavigate={setScreen} />}
      {screen === 'surgery-estimator' && (
        <SurgeryEstimatorScreen onNavigate={setScreen} />
      )}
      {screen === 'surgery-journey' && (
        <SurgeryJourneyScreen onNavigate={setScreen} />
      )}
      {screen === 'diagnostics' && <DiagnosticsScreen onNavigate={setScreen} />}
      {screen === 'records' && <RecordsScreen onNavigate={setScreen} />}
      {screen === 'chat' && <ChatScreen onNavigate={setScreen} />}

      {screen !== 'chat' && (
        <BottomNav active={navMap[screen]} onNavigate={setScreen} />
      )}
    </PhoneFrame>
  )
}
