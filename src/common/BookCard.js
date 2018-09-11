import React from 'react';
import {
  CardWrapper,
  CardPic,
  CardInfo,
  InfoItem
} from './style';
import { connect } from './LabelShowStyle';

let BookCard = props => {
  const { content, tagsAllShow, infoTags } = props;
  return (
    <CardWrapper>
      <CardPic>
        <img src={content.images ? content.images.medium : content.image} alt='图书封面'/>
      </CardPic>
      <CardInfo>
        <InfoItem>名称：{content.title}</InfoItem>
        {infoTags(tagsAllShow, content.tags)}
        <InfoItem>作者：
          {content.author.map((item, index, array) => (
              array.length - 1 === index ? item : item + '/'
          ))}
        </InfoItem>
        <InfoItem className='info-item'>评分：{content.rating.average}</InfoItem>
        <InfoItem className='info-item'>时间：{content.pubdate}</InfoItem>
      </CardInfo>
    </CardWrapper>

  )
}

BookCard = connect(BookCard);
export default BookCard;