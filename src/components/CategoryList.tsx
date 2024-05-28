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
    <div className={categoryContainer}>
      <div className={categoryContainerWrapper}>
        <Link href='/list?cat=test' className={categoryLink}>
          <div className={categoryImageWrapper}>
            <Image
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
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
