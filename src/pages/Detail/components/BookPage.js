import React, { Fragment } from 'react'
import BookCard from '../../../common/BookCard'

const BookPage = (props) => {
  const { content } = props
  return (
    <Fragment>
      <BookCard tagsAllShow content={content} />
      <div className='page-bottom'>
        <h3>序言</h3>
        <p>{content.catalog}</p>
        <h3>简介</h3>
        <p>{content.summary}</p>
      </div>
    </Fragment>
  )
}

export default BookPage
