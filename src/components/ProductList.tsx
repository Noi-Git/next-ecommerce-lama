import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  productButton,
  productCard,
  productCardLink,
  productContainer,
  productDescription,
  productImg1,
  productImg2,
  productInfoContainer,
  productInfoTitle,
  productPrice,
} from './styles/productStyle'

const ProductList = () => {
  return (
    <div className={productContainer}>
      {/* when use fill -- the parent need to be relative */}
      <Link href='/test' className={productCardLink}>
        <div className={productCard}>
          <Image
            src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg1}
          />
          <Image
            src='https://images.pexels.com/photos/5893849/pexels-photo-5893849.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg2}
          />
        </div>
        <div className={productInfoContainer}>
          <span className={productInfoTitle}>Product Name</span>
          <span className={productPrice}>$49</span>
        </div>
        <div className={productDescription}>My description</div>
        <button className={productButton}>Add to card</button>
      </Link>

      {/* BEGINING OF EXAMPLE */}
      <Link href='/test' className={productCardLink}>
        <div className={productCard}>
          <Image
            src='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg1}
          />
          <Image
            src='https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg2}
          />
        </div>
        <div className={productInfoContainer}>
          <span className={productInfoTitle}>Product Name</span>
          <span className={productPrice}>$49</span>
        </div>
        <div className={productDescription}>My description</div>
        <button className={productButton}>Add to card</button>
      </Link>
      <Link href='/test' className={productCardLink}>
        <div className={productCard}>
          <Image
            src='https://images.pexels.com/photos/9594148/pexels-photo-9594148.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg1}
          />
          <Image
            src='https://images.pexels.com/photos/9594142/pexels-photo-9594142.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg2}
          />
        </div>
        <div className={productInfoContainer}>
          <span className={productInfoTitle}>Product Name</span>
          <span className={productPrice}>$49</span>
        </div>
        <div className={productDescription}>My description</div>
        <button className={productButton}>Add to card</button>
      </Link>
      <Link href='/test' className={productCardLink}>
        <div className={productCard}>
          <Image
            src='https://images.pexels.com/photos/14410035/pexels-photo-14410035.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className={productImg1}
          />
          <Image
            src='https://images.pexels.com/photos/15181108/pexels-photo-15181108/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            fill
            sizes='25vw'
            className={productImg2}
          />
        </div>
        <div className={productInfoContainer}>
          <span className={productInfoTitle}>Product Name</span>
          <span className={productPrice}>$49</span>
        </div>
        <div className={productDescription}>My description</div>
        <button className={productButton}>Add to card</button>
      </Link>
      {/* END OF EXAMPLE */}
    </div>
  )
}

export default ProductList
