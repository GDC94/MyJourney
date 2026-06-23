// ---------------------------------------------------------------------------
// Mock REST API — simula los endpoints internos de Kaya (FastAPI / Node.js).
// Sirve para practicar data fetching con React Query SIN backend real.
//
// Cada función devuelve una Promise con delay artificial, igual que un fetch.
// `simulate` permite forzar los 4 estados: success | empty | error | slow.
// ---------------------------------------------------------------------------

export type OrderStatus = 'pending' | 'in-transit' | 'delivered' | 'delayed'

export interface PurchaseOrder {
  id: string
  material: string
  supplier: string
  project: string
  status: OrderStatus
  amount: number
  eta: string // ISO date
}

export interface DeliveryMetric {
  month: string
  onTime: number
  delayed: number
}

export type SimulateMode = 'success' | 'empty' | 'error' | 'slow'

const ORDERS: PurchaseOrder[] = [
  {
    id: 'PO-1042',
    material: 'Structural Steel — W14 Beams',
    supplier: 'Nucor',
    project: 'DC-Ashburn-04',
    status: 'in-transit',
    amount: 184_000,
    eta: '2026-06-18',
  },
  {
    id: 'PO-1043',
    material: 'Switchgear 480V',
    supplier: 'Schneider Electric',
    project: 'DC-Ashburn-04',
    status: 'delayed',
    amount: 96_500,
    eta: '2026-07-02',
  },
  {
    id: 'PO-1044',
    material: 'Precast Concrete Panels',
    supplier: 'Clark Pacific',
    project: 'BioLab-SD-01',
    status: 'delivered',
    amount: 312_000,
    eta: '2026-05-28',
  },
  {
    id: 'PO-1045',
    material: 'HVAC Chillers (x4)',
    supplier: 'Carrier',
    project: 'DC-Ashburn-04',
    status: 'pending',
    amount: 442_300,
    eta: '2026-08-15',
  },
  {
    id: 'PO-1046',
    material: 'Cleanroom HEPA Units',
    supplier: 'Camfil',
    project: 'BioLab-SD-01',
    status: 'in-transit',
    amount: 78_900,
    eta: '2026-06-22',
  },
  {
    id: 'PO-1047',
    material: 'Generators 2MW Diesel',
    supplier: 'Caterpillar',
    project: 'Fab-AZ-02',
    status: 'delayed',
    amount: 1_250_000,
    eta: '2026-09-01',
  },
  {
    id: 'PO-1048',
    material: 'Copper Cabling — 500MCM',
    supplier: 'Southwire',
    project: 'Fab-AZ-02',
    status: 'delivered',
    amount: 67_400,
    eta: '2026-05-30',
  },
]

const METRICS: DeliveryMetric[] = [
  { month: 'Jan', onTime: 42, delayed: 8 },
  { month: 'Feb', onTime: 38, delayed: 12 },
  { month: 'Mar', onTime: 51, delayed: 6 },
  { month: 'Apr', onTime: 47, delayed: 9 },
  { month: 'May', onTime: 55, delayed: 4 },
  { month: 'Jun', onTime: 33, delayed: 11 },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function fetchOrders(
  simulate: SimulateMode = 'success',
): Promise<PurchaseOrder[]> {
  await delay(simulate === 'slow' ? 4000 : 800)
  if (simulate === 'error')
    throw new Error('502 Bad Gateway — procurement service unavailable')
  if (simulate === 'empty') return []
  return ORDERS
}

export async function fetchDeliveryMetrics(): Promise<DeliveryMetric[]> {
  await delay(600)
  return METRICS
}
