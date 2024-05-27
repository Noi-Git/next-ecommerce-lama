'use client'
import { menu, pointer } from '@/components/styles/navigationStyle'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Menu = () => {
  const [open, setOpen] = useState(false) //to show hamberger menu
  return (
    <div>
      <Image
        src='/menu.png'
        width={20}
        height={20}
        alt='hamberger menu'
        className={pointer}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={menu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Shop</Link>
          <Link href='/'>Deals</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Logout</Link>
          <Link href='/'>Cart(1)</Link>
        </div>
      )}
    </div>
  )
}

export default Menu
