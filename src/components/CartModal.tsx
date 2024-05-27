'use client'

import React from 'react'
import { cartImage, navCartModal } from './styles/navigationStyle'
import Image from 'next/image'

const CartModal = () => {
  const cartItems = true

  return (
    <div className={navCartModal}>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <div className=''>
          <Image
            src='https://m.media-amazon.com/images/I/7176IGSqbCL._AC_UL480_FMwebp_QL65_.jpg'
            alt=''
            width={72}
            height={96}
            className={cartImage}
          />
          <div className=''>
            {/* TOP SECTION */}
            <div className=''>
              <h3>Product Name</h3>
              <div className=''>$49</div>
            </div>
            {/* BOTTOM SECTION */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal
