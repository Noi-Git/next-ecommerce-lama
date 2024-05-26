'use client'

import {
  pointer,
  searchForm,
  searchInput,
} from '@/components/styles/navigationStyle'
import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <form className={searchForm}>
      <input type='text' placeholder='Search' className={searchInput} />
      <button className={pointer}>
        <Image src='/search.png' alt='search' width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
