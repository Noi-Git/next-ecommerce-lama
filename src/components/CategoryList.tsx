import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  categoryContainer,
  categoryContainerWrapper,
  categoryImageWrapper,
  categoryLink,
  categoryTitle,
} from './styles/productStyle'

const CategoryList = () => {
  return (
    <div className={`${categoryContainer} scrollbar-hide`}>
      <div className={categoryContainerWrapper}>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        {/* BEGIN EXAMPLE */}
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/20283275/pexels-photo-20283275/free-photo-of-child-standing-in-door-laughing-and-smiling.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/5996842/pexels-photo-5996842.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/3845492/pexels-photo-3845492.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/20283277/pexels-photo-20283277/free-photo-of-smiling-girl-leaning-against-window.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/774910/pexels-photo-774910.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/7169703/pexels-photo-7169703.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className={categoryTitle}>Category Name</h1>
        </Link>
        {/* END EXAMPLE */}
      </div>
    </div>
  )
}

export default CategoryList
