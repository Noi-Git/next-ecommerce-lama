'use client'

import React from 'react'
import {
  cartBottomButtonCheckout,
  cartBottomButtonView,
  cartBottomButtonWrapper,
  cartBottomInfo,
  cartBottomPricetotal,
  cartBottomQuality,
  cartBottomRemove,
  cartBottomSectionCard,
  cartBottomSubtotal,
  cartBottomTextTitle,
  cartContainer,
  cartImage,
  cartTopSection,
  cartTopSectionCard,
  cartTopSectionDescription,
  cartTopSectionPrice,
  cartTopSectionTitle,
  navCartModal,
  shoppingCartTitle,
  shoppingcartWrapper,
} from './styles/navigationStyle'
import Image from 'next/image'

const CartModal = () => {
  const cartItems = true

  return (
    <div className={navCartModal}>
      {!cartItems ? (
        <div className=''>Cart is Empty</div>
      ) : (
        <>
          <h2 className={shoppingCartTitle}>Shopping Cart</h2>
          <div className={shoppingcartWrapper}>
            {/* TOP SECTION */}
            <div className={cartContainer}>
              <Image
                src='https://m.media-amazon.com/images/I/7176IGSqbCL._AC_UL480_FMwebp_QL65_.jpg'
                alt=''
                width={72}
                height={96}
                className={cartImage}
              />
              {/* TITLE & DESCRIPTION*/}
              <div className={cartTopSection}>
                <div className={cartTopSectionCard}>
                  <h3 className={cartTopSectionTitle}>Product Name</h3>
                  <div className={cartTopSectionPrice}>$13.99</div>
                </div>
                <div className={cartTopSectionDescription}>
                  Product description will be here
                </div>
                {/* QUANTITY */}
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
              {/* TITLE & DESCRIPTION*/}
              <div className={cartTopSection}>
                <div className={cartTopSectionCard}>
                  <h3 className={cartTopSectionTitle}>Product Name</h3>
                  <div className={cartTopSectionPrice}>$7.89</div>
                </div>
                <div className={cartTopSectionDescription}>
                  Product description will be here
                </div>
                {/* QUANTITY */}
                <div className={cartBottomSectionCard}>
                  <span className={cartBottomQuality}>Qty. 1</span>
                  <span className={cartBottomRemove}>Remove</span>
                </div>
              </div>
            </div>
            {/* END ITEM */}
          </div>
          {/* BOTTOM SECTION */}
          <div className=''>
            <div className={cartBottomInfo}>
              <span className={cartBottomSubtotal}>Subtotal</span>
              <span className={cartBottomPricetotal}>21.88</span>
            </div>
            <p className={cartBottomTextTitle}>
              Shipping and taxes calculated at checkout.
            </p>
            <div className={cartBottomButtonWrapper}>
              <button className={cartBottomButtonView}>View Cart</button>
              <button className={cartBottomButtonCheckout}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal
