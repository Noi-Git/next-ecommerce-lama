import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll'>
      <div className='flex gap-4 md:gap-8'>
        <Link href='/list?cat=test'>
          <div className='relative bg-slate-100 w-full h-96'>
            <Image
              src='https://images.pexels.com/photos/6616146/pexels-photo-6616146.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt=''
              fill
              sizes='20vw'
              className='object-cover'
            />
          </div>
          <h1 className='mt-8 font-light tex-xl tracking-wide'>
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList