// Data compartida para los ejercicios de challenges-data.
// Cada ejercicio la importa: import { orders, type Order } from './data'

export interface Order {
  id: string
  supplier: string
  project: string
  amount: number
  status: 'pending' | 'delivered' | 'delayed'
}

export const orders: Order[] = [
  { id: 'PO-1', supplier: 'Nucor', project: 'DC-04', amount: 184_000, status: 'delivered' },
  { id: 'PO-2', supplier: 'Carrier', project: 'DC-04', amount: 442_000, status: 'pending' },
  { id: 'PO-3', supplier: 'Nucor', project: 'BioLab', amount: 96_000, status: 'delayed' },
  { id: 'PO-4', supplier: 'Caterpillar', project: 'Fab-02', amount: 1_250_000, status: 'delayed' },
  { id: 'PO-5', supplier: 'Carrier', project: 'BioLab', amount: 67_000, status: 'delivered' },
  { id: 'PO-6', supplier: 'Nucor', project: 'DC-04', amount: 210_000, status: 'pending' },
]
