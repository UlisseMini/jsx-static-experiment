import React from 'react'

export default function Navbar () {
  return (
    <nav className='navbar'>
      <a href='/' className='nav-home'>
        <img
          src='/profile.png'
          alt='cute seal'
          className='pfp-img'
        />
      </a>

      <a href='/about'>About</a>
      {/* <a href='https://github.com/UlisseMini'>Github</a> */}
      {/* <a href='https://gitlab.com/0u'>Gitlab</a> */}
    </nav>
  )
}
