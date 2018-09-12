import React from 'react'
import {
  CardWrapper,
  CardPic,
  CardInfo,
  InfoItem
} from './style'
import { connect } from './LabelShowStyle'

let MovieCard = props => {
  const { content, tagsAllShow, infoTags } = props
  return (
    <CardWrapper>
      <CardPic>
        <img src={content.images ? content.images.medium : content.image} alt='电影海报' />
      </CardPic>
      <CardInfo>
        <InfoItem className='movie-title'>{content.title}</InfoItem>
        {infoTags(tagsAllShow, content.genres)}
        <InfoItem className='movie-casts'>
          {
            content.casts.map((item, index) => {
              if (index) {
                return '/' + item.name
              }
              return item.name
            })
          }
        </InfoItem>
        <InfoItem>时间：{content.year}</InfoItem>
        <InfoItem>评分：{content.rating.average}</InfoItem>
      </CardInfo>
    </CardWrapper>
  )
}

MovieCard = connect(MovieCard)
export default MovieCard
