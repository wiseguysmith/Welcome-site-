'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  organization?: string
  building: string
  needHelp: string
  area: string
  budget?: string
}

const areas = [
  'AI systems & automation',
  'Tokenization / RWA',
  'Founder ecosystem',
  'Strategic partnership',
  'Speaking / press',
  'Other',
]

const inputCls =
  'w-full bg-charcoal/30 border border-cream/10 text-cream px-4 py-3 text-sm focus:outline-none focus:border-gold/40 transition-colors duration-300 placeholder:text-cream/20'

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: connect to email service (Resend, SendGrid, Formspree, etc.)
    console.log('Consultation form — pending backend integration:', data)
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-gold/20 p-12 text-center">
        <p className="font-mono text-xs text-gold/50 tracking-[0.3em] uppercase mb-4">Received</p>
        <p className="font-serif text-3xl text-cream mb-4">Thank you.</p>
        <p className="text-cream/35 text-sm">
          I’ll review your message and be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="border border-gold/10 p-3 mb-2">
        <p className="font-mono text-xs text-gold/30 tracking-[0.15em] text-center">
          Form ready · Backend integration pending
        </p>
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">Name *</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className={inputCls}
          placeholder="Your name"
        />
        {errors.name && <p className="text-gold/60 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">Email *</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
          })}
          type="email"
          className={inputCls}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-gold/60 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">
          Organization <span className="text-cream/20">(optional)</span>
        </label>
        <input
          {...register('organization')}
          className={inputCls}
          placeholder="Company, project, or institution"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">What are you building? *</label>
        <textarea
          {...register('building', { required: 'Please describe what you\'re building' })}
          rows={3}
          className={`${inputCls} resize-none`}
          placeholder="Describe your project or work"
        />
        {errors.building && <p className="text-gold/60 text-xs mt-1">{errors.building.message}</p>}
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">What do you need help with? *</label>
        <textarea
          {...register('needHelp', { required: 'Please describe what you need' })}
          rows={3}
          className={`${inputCls} resize-none`}
          placeholder="What’s the specific challenge or opportunity?"
        />
        {errors.needHelp && <p className="text-gold/60 text-xs mt-1">{errors.needHelp.message}</p>}
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">Area of Interest *</label>
        <select
          {...register('area', { required: 'Please select an area' })}
          className={inputCls}
        >
          <option value="">Select one</option>
          {areas.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
        {errors.area && <p className="text-gold/60 text-xs mt-1">{errors.area.message}</p>}
      </div>

      <div>
        <label className="font-mono text-xs text-cream/35 tracking-[0.2em] uppercase block mb-2">
          Budget / Timeline <span className="text-cream/20">(optional)</span>
        </label>
        <input
          {...register('budget')}
          className={inputCls}
          placeholder="e.g. Q3 2026, $10k–$50k, flexible"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold text-black py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
