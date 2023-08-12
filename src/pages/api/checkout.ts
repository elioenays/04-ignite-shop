import { stripe } from '@/src/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

export default async function handleClientScriptLoad(
  req: NextRequest,
  res: NextResponse,
) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found' })
  }

<<<<<<< HEAD
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
=======
  const successUrl = `${process.env.NEXT_URL}/success`
>>>>>>> 3ff92c2df3344a1d0564b034458537a01a3fd189
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
