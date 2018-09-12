import React, { Fragment } from 'react'
import MusicCard from '../../../common/MusicCard'

const MusicPage = props => {
  const { content } = props
  return (
    <Fragment>
      <MusicCard content={content} />
      <div className='page-bottom'>
        <h3>简介</h3>
        <p>{content.summary}</p>
      </div>
    </Fragment>
  )
}

export default MusicPage
