import { useQuery } from '@tanstack/react-query'
import { useAtom, useAtomValue } from 'jotai'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  fetchDeliveryMetrics,
  fetchOrders,
  type OrderStatus,
  type PurchaseOrder,
  type SimulateMode,
} from '@/lib/api'
import { searchAtom, simulateModeAtom, statusFilterAtom } from '@/store/atoms'

// ---------------------------------------------------------------------------
// Dashboard demo: cubre el patrón completo que pide la JD de Kaya —
// React Query (server state) + Jotai (UI state) + shadcn (UI) + Recharts.
// Manejo explícito de los 4 estados: loading / error / empty / success.
// ---------------------------------------------------------------------------

const STATUS_VARIANT: Record<
  OrderStatus,
  'default' | 'secondary' | 'destructive' | 'outline'
> = {
  delivered: 'default',
  'in-transit': 'secondary',
  pending: 'outline',
  delayed: 'destructive',
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

export function OrdersDashboard() {
  const [statusFilter, setStatusFilter] = useAtom(statusFilterAtom)
  const [search, setSearch] = useAtom(searchAtom)
  const [simulate, setSimulate] = useAtom(simulateModeAtom)

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Procurement Overview
          </h1>
          <p className="text-muted-foreground text-sm">
            Purchase orders across active projects
          </p>
        </div>

        {/* Selector para forzar estados de la API — herramienta de práctica */}
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-xs">API mode:</span>
          <Select
            value={simulate}
            onValueChange={(v) => setSimulate(v as SimulateMode)}
          >
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="success">success</SelectItem>
              <SelectItem value="empty">empty</SelectItem>
              <SelectItem value="error">error</SelectItem>
              <SelectItem value="slow">slow</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <DeliveryChart />

      <Card>
        <CardHeader>
          <CardTitle>Purchase Orders</CardTitle>
          <CardDescription>
            Filter by status or search by material, supplier, or project
          </CardDescription>
          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Search orders…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
            />
            <Select
              value={statusFilter}
              onValueChange={(v) => setStatusFilter(v as OrderStatus | 'all')}
            >
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-transit">In transit</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <OrdersTable />
        </CardContent>
      </Card>
    </div>
  )
}

function OrdersTable() {
  const simulate = useAtomValue(simulateModeAtom)
  const statusFilter = useAtomValue(statusFilterAtom)
  const search = useAtomValue(searchAtom)

  const {
    data: orders,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['orders', simulate],
    queryFn: () => fetchOrders(simulate),
  })

  // 1. LOADING — skeletons con la misma forma que el contenido real
  if (isPending) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }, (_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </div>
    )
  }

  // 2. ERROR — mensaje claro + acción de recuperación
  if (isError) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <p className="text-destructive text-sm">{error.message}</p>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          Retry
        </Button>
      </div>
    )
  }

  // 3. EMPTY — distinto de error; guía al usuario
  if (orders.length === 0) {
    return (
      <p className="text-muted-foreground py-10 text-center text-sm">
        No purchase orders yet. Orders will appear here once procurement creates
        them.
      </p>
    )
  }

  const filtered = filterOrders(orders, statusFilter, search)

  // 3b. EMPTY por filtros — caso distinto al empty de la API
  if (filtered.length === 0) {
    return (
      <p className="text-muted-foreground py-10 text-center text-sm">
        No orders match your filters.
      </p>
    )
  }

  // 4. SUCCESS
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>PO</TableHead>
          <TableHead>Material</TableHead>
          <TableHead>Supplier</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>ETA</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filtered.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-mono text-xs">{order.id}</TableCell>
            <TableCell className="font-medium">{order.material}</TableCell>
            <TableCell>{order.supplier}</TableCell>
            <TableCell className="text-muted-foreground">
              {order.project}
            </TableCell>
            <TableCell>
              <Badge variant={STATUS_VARIANT[order.status]}>
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {currency.format(order.amount)}
            </TableCell>
            <TableCell className="text-muted-foreground">{order.eta}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function filterOrders(
  orders: PurchaseOrder[],
  status: OrderStatus | 'all',
  search: string,
): PurchaseOrder[] {
  const term = search.trim().toLowerCase()
  return orders.filter((order) => {
    const matchesStatus = status === 'all' || order.status === status
    const matchesSearch =
      term === '' ||
      [order.material, order.supplier, order.project].some((field) =>
        field.toLowerCase().includes(term),
      )
    return matchesStatus && matchesSearch
  })
}

function DeliveryChart() {
  const { data, isPending } = useQuery({
    queryKey: ['delivery-metrics'],
    queryFn: fetchDeliveryMetrics,
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deliveries per Month</CardTitle>
        <CardDescription>On-time vs delayed deliveries</CardDescription>
      </CardHeader>
      <CardContent>
        {isPending ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <ResponsiveContainer width="100%" height={256}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" fontSize={12} tickLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar
                dataKey="onTime"
                name="On time"
                fill="hsl(142 71% 45%)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="delayed"
                name="Delayed"
                fill="hsl(0 72% 51%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
