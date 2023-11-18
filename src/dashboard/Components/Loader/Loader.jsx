import React from 'react'
import './Loader.css'

export function Loader () {
  return (
    <div className='loader-container'>
      <div className='loader' />
      <p>Cargando...</p>
    </div>
  )
}
