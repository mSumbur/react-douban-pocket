import React, { Fragment } from 'react'
import MovieCard from '../../../common/MovieCard'

const MoviePage = props => {
  const { content } = props
  return (
    <Fragment>
      <div className='movie-pic'>
        <img src={content.images.medium} alt='电影海报' />
      </div>
      <div className='page-bottom'>
        <h3>简介</h3>
        <MovieCard tagsAllShow content={props.content} />
        <h3>演员</h3>
        <ul className='casts'>
          {
            content.casts.map((item, index) => {
              return (
                <li className='cast' key={index}>
                  <a href={item.alt} target='_blank'><img src={item.avatars ? item.avatars.small : ''} alt='演员' /></a>
                  <h6>{item.name}</h6>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Fragment>
  )
}

export default MoviePage
