import React from 'react'
import SearchInput from './SearchInput';

export default function Header({searchNotes}) {
  return (
    <header className="header">
      <h1 className="header__logo">CatatanKu</h1>
      <div className="header__search-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <SearchInput searchNotes={searchNotes}/>
      </div>
    </header>
  )
}
