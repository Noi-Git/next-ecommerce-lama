'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { navIcons, pointer, profile } from './styles/navigationStyle'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const NavIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()

  //TEMPORARY
  const isLoggedIn = false

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login')
    }
    setIsProfileOpen((prev) => !prev)
  }

  return (
    <div className={navIcons}>
      <Image
        src='/profile.png'
        alt='profile'
        width={22}
        height={22}
        className={pointer}
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className={profile}>
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
