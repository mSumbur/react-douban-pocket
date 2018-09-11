import React from 'react';
import {
  InfoTags,
  InfoTagsAll
} from './style';

export const connect = WrapperComponent => {
  const LabelShowStyle = props => (
    <WrapperComponent infoTags={tagsAllShow} {...props}/>
  )
  return LabelShowStyle;
}

function tagsAllShow(show, content) {
  if (show) {
    return (
      <InfoTagsAll>
        {content.map((item, index) => (
          <span className='info-tag' key={index}>{item.name || item }</span>
        ))}
      </InfoTagsAll>
    );
  } else {
    return (
      <InfoTags>
        {content.map((item, index) => (
          <span className='info-tag' key={index}>{item.name || item}</span>
        ))}
      </InfoTags>
    );
  }
};
