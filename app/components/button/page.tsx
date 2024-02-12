'use client'
import React from 'react'
import { openModal } from '../../utils/globalFunction'

interface ButtonProps{
    name: string
}

export const ButtonT = ({name}: ButtonProps) => {

  return (
    <button
        className="btn"
        onClick={() => openModal('login_modal')}
      >
        {name}
      </button>
  )
}
