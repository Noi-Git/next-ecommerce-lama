'use client'

import React, { useState } from 'react'
import {
  homepageContainer,
  homepageWrapper,
  homepageDisplay,
  homepageTextContainer,
  homepageImageContainer,
  homepageImageH2,
  homepageImageH1,
  homepageShopNowBtn,
  sliceIndicatorContainer,
  sliceIndicatorOuterDots,
  sliceIndicatorInnerDots,
} from './styles/homepageStyle'
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
          <div key={slide.id} className={`${slide.bg} ${homepageDisplay}`}>
            {/* TEXT CONTAINER */}
            <div className={homepageTextContainer}>
              <h2 className={homepageImageH2}>{slide.description}</h2>
              <h1 className={homepageImageH1}>{slide.title}</h1>
              <Link href={slide.url}>
                <button className={homepageShopNowBtn}>SHOP NOW</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className={homepageImageContainer}>
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes='100%'
                className='object-cover'
              />
            </div>
          </div>
        ))}
      </div>
      <div className={sliceIndicatorContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`${sliceIndicatorOuterDots} ${
              current === index ? 'scale-150' : ''
            }`}
          >
            {/* CREATE CIRCLE */}
            {current === index && (
              <div className={sliceIndicatorInnerDots}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
