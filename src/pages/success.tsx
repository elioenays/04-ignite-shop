import React from 'react'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'
import Link from 'next/link'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Elioenay Silva</strong>, sua{' '}
        <strong>Camiseta Beyond the Limits</strong>
        já está a caminho da sua casa.
      </p>

      <Link href='/'>Voltar ao catalogo</Link>
    </SuccessContainer>
  )
}
