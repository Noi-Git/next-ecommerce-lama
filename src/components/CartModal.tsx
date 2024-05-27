'use client'

import React from 'react'
import {
  cartBottomQuality,
  cartBottomRemove,
  cartBottomSectionCard,
  cartContainer,
  cartImage,
  cartTopSection,
  cartTopSectionCard,
  cartTopSectionDescription,
  cartTopSectionPrice,
  cartTopSectionTitle,
  navCartModal,
  shopingcartWrapper,
} from './styles/navigationStyle'
import Image from 'next/image'

const CartModal = () => {
  const cartItems = true

  return (
    <div className={navCartModal}>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <div className={shopingcartWrapper}>
          <div className={cartContainer}>
            <Image
              src='https://m.media-amazon.com/images/I/7176IGSqbCL._AC_UL480_FMwebp_QL65_.jpg'
              alt=''
              width={72}
              height={96}
              className={cartImage}
            />
            {/* TOP SECTION */}
            <div className={cartTopSection}>
              <div className={cartTopSectionCard}>
                <h3 className={cartTopSectionTitle}>Product Name</h3>
                <div className={cartTopSectionPrice}>$13.99</div>
              </div>
              <div className={cartTopSectionDescription}>
                Product description will be here
              </div>
              {/* BOTTOM SECTION */}
              <div className={cartBottomSectionCard}>
                <span className={cartBottomQuality}>Qty. 2</span>
                <span className={cartBottomRemove}>Remove</span>
              </div>
            </div>
          </div>
          {/* ITEMS */}
          <div className={cartContainer}>
            <Image
              src='https://m.media-amazon.com/images/I/711GgMVyykL._AC_UL480_FMwebp_QL65_.jpg'
              alt=''
              width={72}
              height={96}
              className={cartImage}
            />
            {/* TOP SECTION */}
            <div className={cartTopSection}>
              <div className={cartTopSectionCard}>
                <h3 className={cartTopSectionTitle}>Product Name</h3>
                <div className={cartTopSectionPrice}>$7.89</div>
              </div>
              <div className={cartTopSectionDescription}>
                Product description will be here
              </div>
              {/* BOTTOM SECTION */}
              <div className={cartBottomSectionCard}>
                <span className={cartBottomQuality}>Qty. 1</span>
                <span className={cartBottomRemove}>Remove</span>
              </div>
            </div>
          </div>
          {/* END ITEM */}
        </div>
      )}
    </div>
  )
}

export default CartModal
