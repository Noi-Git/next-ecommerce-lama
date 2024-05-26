'use client'
import { pointer } from '@/styles/commonStyle'
import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
  const [open, setOpen] = useState(false) //to show hamberger menu
  return (
    <div>
      <Image
        src='/menu.png'
        alt='hamberger menue'
        className={pointer}
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  )
}

export default Menu
