'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { navIcons, pointer } from './styles/navigationStyle'
import Link from 'next/link'

const NavIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div className={navIcons}>
      <Image
        src='/profile.png'
        alt='profile'
        width={22}
        height={22}
        className={pointer}
      />

      {isProfileOpen && (
        <div>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}

      <Image
        src='/notification.png'
        alt='profile'
        width={22}
        height={22}
        className={pointer}
      />
      <Image
        src='/cart.png'
        alt='profile'
        width={22}
        height={22}
        className={pointer}
      />
    </div>
  )
}

export default NavIcon
