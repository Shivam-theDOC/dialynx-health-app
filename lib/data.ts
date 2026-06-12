export type Screen =
  | 'dashboard'
  | 'doctors'
  | 'compare'
  | 'insurance'
  | 'surgery-estimator'
  | 'surgery-journey'
  | 'diagnostics'
  | 'records'
  | 'chat'

export const doctors = [
  {
    id: 'arjun-mehta',
    name: 'Dr. Raj Kumar',
    specialty: 'Interventional Cardiologist',
    hospital: 'Fortis Heart Institute',
    image: '/doctors/WhatsApp Image 2026-06-12 at 05.47.13.jpeg',
    rating: 4.9,
    reviews: 1284,
    fee: 1200,
    experience: 18,
    successRate: 97,
    nextSlot: 'Today, 4:30 PM',
  },
  {
    id: 'priya-nair',
    name: 'Dr. Priya Nair',
    specialty: 'Orthopedic Surgeon',
    hospital: 'Manipal Hospitals',
    image: '/doctors/doctor-2.png',
    rating: 4.8,
    reviews: 962,
    fee: 1000,
    experience: 14,
    successRate: 95,
    nextSlot: 'Tomorrow, 11:00 AM',
  },
  {
    id: 'rakesh-iyer',
    name: 'Dr. Rakesh Iyer',
    specialty: 'Neurologist',
    hospital: 'Apollo Speciality',
    image: '/doctors/doctor-3.png',
    rating: 4.7,
    reviews: 738,
    fee: 1500,
    experience: 22,
    successRate: 96,
    nextSlot: 'Thu, 9:15 AM',
  },
]

export type Doctor = (typeof doctors)[number]

export const surgeryBreakdown = {
  name: 'Coronary Angioplasty',
  hospital: 'Fortis Heart Institute, Bengaluru',
  items: [
    { label: 'Surgeon Fee', value: 95000 },
    { label: 'Hospital Charges', value: 142000 },
    { label: 'Anaesthesia', value: 38000 },
    { label: 'Medication & Implants', value: 86000 },
    { label: 'Diagnostics & Pre-op', value: 24000 },
  ],
}

export const journeySteps = [
  {
    title: 'Pre-Op Assessment',
    detail: 'Blood work, ECG and anaesthesia clearance completed.',
    date: 'Mar 12',
    status: 'done' as const,
  },
  {
    title: 'Admission',
    detail: 'Room 412 · West Wing. Insurance pre-auth approved.',
    date: 'Mar 14',
    status: 'done' as const,
  },
  {
    title: 'Surgery',
    detail: 'Coronary angioplasty with Dr. Arjun Mehta.',
    date: 'Mar 14',
    status: 'active' as const,
  },
  {
    title: 'Recovery',
    detail: 'ICU monitoring followed by step-down ward.',
    date: 'Mar 15',
    status: 'upcoming' as const,
  },
  {
    title: 'Discharge',
    detail: 'Final review, prescriptions and follow-up plan.',
    date: 'Mar 17',
    status: 'upcoming' as const,
  },
]

export const diagnosticsTests = [
  {
    name: 'Complete Blood Count (CBC)',
    labs: [
      { lab: 'Thyrocare', price: 299, eta: '60 min' },
      { lab: 'Dr Lal PathLabs', price: 349, eta: '90 min' },
      { lab: 'Metropolis', price: 380, eta: '75 min' },
    ],
  },
  {
    name: 'Lipid Profile',
    labs: [
      { lab: 'Thyrocare', price: 450, eta: '70 min' },
      { lab: 'Dr Lal PathLabs', price: 520, eta: '90 min' },
    ],
  },
  {
    name: 'HbA1c (Diabetes)',
    labs: [
      { lab: 'Metropolis', price: 399, eta: '60 min' },
      { lab: 'Thyrocare', price: 360, eta: '80 min' },
    ],
  },
]

export const healthRecords = {
  Prescriptions: [
    { title: 'Cardiac Medication Plan', by: 'Dr. Arjun Mehta', date: '12 Mar 2026' },
    { title: 'Post-op Antibiotics', by: 'Dr. Priya Nair', date: '04 Feb 2026' },
  ],
  'Lab Reports': [
    { title: 'Lipid Profile Report', by: 'Thyrocare', date: '10 Mar 2026' },
    { title: 'Complete Blood Count', by: 'Metropolis', date: '02 Mar 2026' },
  ],
  'Discharge Summaries': [
    { title: 'Angioplasty Discharge', by: 'Fortis Heart Institute', date: '17 Mar 2026' },
  ],
  'Insurance Documents': [
    { title: 'Cashless Pre-auth Letter', by: 'Star Health', date: '13 Mar 2026' },
    { title: 'Policy Schedule 2026', by: 'Star Health', date: '01 Jan 2026' },
  ],
}

export const chatMessages = [
  { from: 'them' as const, text: 'Hi Shivam, this is Sneha — your dedicated care coordinator. How are you feeling today?', time: '9:24 AM' },
  { from: 'me' as const, text: 'Hi Sneha, a bit nervous about the angioplasty next week.', time: '9:26 AM' },
  { from: 'them' as const, text: 'Completely understandable. The good news is your cashless pre-authorization is already approved and Dr. Mehta has a 97% success rate.', time: '9:27 AM' },
  { from: 'them' as const, text: 'I have blocked Room 412 for you and arranged transport for admission day. Shall I share the pre-op checklist?', time: '9:27 AM' },
]

export const notifications = [
  {
    id: 1,
    type: 'appointment' as const,
    title: 'Appointment reminder',
    detail: 'Video consult with Dr. Arjun Mehta starts at 4:30 PM today.',
    time: '2h ago',
    unread: true,
  },
  {
    id: 2,
    type: 'insurance' as const,
    title: 'Cashless pre-auth approved',
    detail: 'Star Health approved ₹2,40,000 for your angioplasty at Fortis.',
    time: '5h ago',
    unread: true,
  },
  {
    id: 3,
    type: 'report' as const,
    title: 'Lab report ready',
    detail: 'Your Lipid Profile report from Thyrocare is now available.',
    time: 'Yesterday',
    unread: true,
  },
  {
    id: 4,
    type: 'chat' as const,
    title: 'Message from Sneha',
    detail: 'I have shared your pre-op checklist. Please review before admission.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: 5,
    type: 'payment' as const,
    title: 'EMI option available',
    detail: 'You are eligible for 0% EMI on your surgery estimate of ₹3,85,000.',
    time: '2 days ago',
    unread: false,
  },
]
