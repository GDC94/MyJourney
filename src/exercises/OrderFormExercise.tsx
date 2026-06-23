// ===========================================================================
// EJERCICIO 6 — FORM con validación (workflows = el día a día de Kaya)
//
// Construí un form "New Purchase Order" con 3 campos:
//   - Supplier   (texto, requerido)
//   - Material   (texto, requerido)
//   - Amount     (número, requerido, > 0)
//
// Comportamiento:
//   - Inputs CONTROLADOS (el valor vive en React state)
//   - Botón "Create Order" → al hacer submit, VALIDÁ:
//       · campos vacíos → mostrar error debajo del campo
//       · amount <= 0 o no-número → error
//   - Si todo OK → mostrar un mensaje de éxito con los datos (no hace falta API)
//   - El form NO debe recargar la página (preventDefault)
//
// 🪤 TRAMPAS que evalúan:
//   1. ¿Usás <form onSubmit> + preventDefault, o un onClick en el botón?
//      (lo correcto es <form>, así anda el Enter para enviar)
//   2. ¿Validás en el submit o en cada tecla? (en submit es más limpio para empezar)
//   3. ¿Los errores son por-campo o un solo error genérico? (por-campo = mejor UX)
//   4. ¿El input de amount es type="number"? ¿Cómo manejás que e.target.value
//      siempre es STRING aunque el input sea number?
//
// Pista de estado: un objeto para los valores y otro para los errores suele
// ser lo más limpio:
//   const [form, setForm] = useState({ supplier: '', material: '', amount: '' })
//   const [errors, setErrors] = useState<Record<string, string>>({})
//
// Objetivo: < 12 min. Probalo en el browser (escribí, dejá vacío, mandá).
// ===========================================================================

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Tipo de los valores del form. amount es STRING porque e.target.value
// siempre es string (aunque el input sea type="number").
interface OrderForm {
  supplier: string
  material: string
  amount: string
}

export function OrderFormExercise() {
  // 1. Estado de los valores: UN objeto para los 3 campos.
  const [form, setForm] = useState<OrderForm>({
    supplier: '',
    material: '',
    amount: '',
  })

  // 2. Estado de los errores: objeto { campo: mensaje }. Vacío = sin errores.
  const [errors, setErrors] = useState<Record<string, string>>({})

  // 3. Estado de éxito: guardamos la order creada para mostrarla.
  const [success, setSuccess] = useState<OrderForm | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 4. Validación: armo un objeto de errores. Si queda vacío, todo OK.
    const newErrors: Record<string, string> = {}

    if (!form.supplier.trim()) newErrors.supplier = 'Supplier is required'
    if (!form.material.trim()) newErrors.material = 'Material is required'

    // amount: e.target.value es string → convierto a número para validar.
    const amountNum = Number(form.amount)
    if (!form.amount.trim()) {
      newErrors.amount = 'Amount is required'
    } else if (Number.isNaN(amountNum) || amountNum <= 0) {
      newErrors.amount = 'Amount must be a number greater than 0'
    }

    setErrors(newErrors)

    // Si hay AL MENOS un error, corto acá (no envío).
    if (Object.keys(newErrors).length > 0) {
      setSuccess(null)
      return
    }

    // Éxito: acá iría el POST a la API. Por ahora mostramos los datos.
    setSuccess(form)
    setForm({ supplier: '', material: '', amount: '' }) // limpio el form
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">New Purchase Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="supplier" className="text-sm font-medium">
            Supplier
          </label>
          <Input
            id="supplier"
            name="supplier"
            type="text"
            value={form.supplier}
            onChange={handleChange}
          />
          {errors.supplier && (
            <p className="text-sm text-red-500">{errors.supplier}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="material" className="text-sm font-medium">
            Material
          </label>
          <Input
            id="material"
            name="material"
            type="text"
            value={form.material}
            onChange={handleChange}
          />
          {errors.material && (
            <p className="text-sm text-red-500">{errors.material}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="amount" className="text-sm font-medium">
            Amount
          </label>
          <Input
            id="amount"
            name="amount"
            type="number"
            value={form.amount}
            onChange={handleChange}
          />
          {errors.amount && (
            <p className="text-sm text-red-500">{errors.amount}</p>
          )}
        </div>

        <Button type="submit">Create Order</Button>
      </form>

      {success && (
        <p className="mt-4 rounded border border-green-300 bg-green-50 p-3 text-sm text-green-700">
          Order created: {success.material} from {success.supplier} for $
          {Number(success.amount).toLocaleString()}
        </p>
      )}
    </div>
  )
}
