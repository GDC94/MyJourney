// ===========================================================================
// EJERCICIO 6b — Otro FORM (hacelo SOLO, sin mirar OrderFormExercise.tsx)
//
// "Contact us" form con 3 campos:
//   - Name    (texto, requerido)
//   - Email   (texto, requerido, debe contener "@")
//   - Message (textarea, requerido, mínimo 10 caracteres)
//
// Comportamiento (igual patrón que el de orders):
//   - Inputs controlados (un objeto de estado)
//   - <form onSubmit> + preventDefault
//   - Validación en el submit, errores POR campo
//   - Si todo OK → mensaje de éxito + limpiar el form
//
// 🆕 Lo nuevo respecto al de orders:
//   1. Email: validá que incluya "@"  → form.email.includes('@')
//   2. Message: usá <textarea> (no <Input>), y validá largo mínimo
//      → form.message.trim().length >= 10
//
// Recordá: handleChange genérico con [name], objeto de errores, Object.keys
// para saber si hay errores. Objetivo: < 10 min (ya tenés el molde fresco).
// ===========================================================================

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useState } from "react"

interface ContactForm {
  name: string
  email: string
  message: string
}

export function ContactFormExercise() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const [success, setSuccess] = useState<ContactForm | null>(null)

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setForm((prev) => ({ ...prev, [name]: value }))
  } 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !form.email.includes('@')) newErrors.email = 'email is required and must contains @';
    if (!form.message.trim() || form.message.trim().length < 10) newErrors.message = 'Message is required!!'


    setErrors(newErrors) 

    if (Object.keys(newErrors).length > 0) {
      setSuccess(null)
      return
    }

    setSuccess(form)
    setForm({ name: '', email: '', message: '' }) 
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-semibold">Contact Us</h1>
      
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Input
            id="message"
            name="message"
            type="text"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message}</p>
          )}
        </div>
        <Button type="submit">Create User</Button>
      </form>

      {
        success && <p>Perfect!! User created bro</p>
      }
    </div>
  )
}
