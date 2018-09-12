import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarWrapper } from '../../style'

const NavBar = (props) => {
  const { type } = props
  return (
    <NavBarWrapper>
      <Link to='/search/book' className={type === 'book' ? 'show' : null}>图书</Link>
      <Link to='/search/movie' className={type === 'movie' ? 'show' : null}>电影</Link>
      <Link to='/search/music' className={type === 'music' ? 'show' : null}>音乐</Link>
    </NavBarWrapper>
  )
}

export default NavBar
