import React from 'react';
import {
  CardWrapper,
  CardPic,
  CardInfo, 
  InfoItem
} from './style';

const MusicCard = props => {
  const { content } = props;
  return (
    <CardWrapper>
      <CardPic>      
        <img src={content.images ? content.images.medium : content.image} alt='专辑图片'/>      
      </CardPic>
      <CardInfo>
        <InfoItem>名称：{content.title}</InfoItem>
        <li className='item-tags'>作者：
          {
            content.author ? content.author.map((item, index) => {
              return <span className='item-tag' key={index}>{item.name}</span>
            }) : ''
          }
        </li>
        <InfoItem className='list-item'>演唱：{content.attrs.singer}</InfoItem>
        <InfoItem className='list-item'>评分：{content.rating.average}</InfoItem>
      </CardInfo>
    </CardWrapper>
  )
}

export default MusicCard;