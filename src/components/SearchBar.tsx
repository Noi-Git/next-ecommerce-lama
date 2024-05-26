'use client'

import {
  pointer,
  searchForm,
  searchInput,
} from '@/components/styles/navigationStyle'
import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
  }
  return (
    <form className={searchForm} onSubmit={handleSearch}>
      <input
        type='text'
        name='name'
        placeholder='Search'
        className={searchInput}
      />
      <button className={pointer}>
        <Image src='/search.png' alt='search' width={16} height={16} />
      </button>
    </form>
  )
}

export default SearchBar
