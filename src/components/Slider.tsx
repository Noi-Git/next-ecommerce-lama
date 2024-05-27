'use client'

import React, { useState } from 'react'
import { homepageContainer, homepageWrapper } from './styles/homepageStyle'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
]

const Slider = () => {
  const [current, setCurrent] = useState(0)

  return (
    <div className={homepageContainer}>
      <div className={homepageWrapper}>
        {slides.map((slide) => (
          <>
            {/* TEXT CONTAINER */}
            <div key={slide.id} className='w-1/2'>
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}>
                <button>SHOP NOW</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div key={slide.id} className='w-1/2 relative'>
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Slider
