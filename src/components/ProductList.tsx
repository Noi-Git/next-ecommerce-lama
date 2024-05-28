import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gap-8 gap-y-16 justify-between flex-wrap mt-12'>
      {/* when use fill -- the parent need to be relative */}
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'
      >
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transistion-opacity easy duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/2062324/pexels-photo-2062324.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-pink text-pink py-2 px-4 text-xs hover:bg-pink hover:text-white w-max'>
          Add to card
        </button>
      </Link>
    </div>
  )
}

export default ProductList
