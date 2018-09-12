import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px; 
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px #ccc;
`

export const CardPic = styled.div`
  width: 100px;
  margin: 5px 0px 0px 5px;
  verticle-align: center; 
  img {
    width: 100%;
  }
`

export const CardInfo = styled.ul`
  display: flex;
  flex-direction: column;
  width: calc(100% - 105px);
  margin: 0;
  padding: 5px 5px 5px 20px;
  text-align: left;
  list-style-type: none;
  .info-item {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .info-tags {
    white-space: nowrap;
    text-overflow: clip;
    overflow-x: scroll;
  }
  .info-tag {
    margin-right: 5px;
    padding: 2px;
    font-weight: bold;
    color: #fff;
    background-color: #f3b500;
  }
`

export const InfoItem = styled.li`
  flex: 1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &.movie-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  &.movie-casts {
    font-size: 0.9rem;
    color: #919191;
  }
`

export const InfoTags = styled(InfoItem)`
  overflow-x: scroll;
  text-overflow: clip;
`

export const InfoTagsAll = styled.li`
  flex: 1;
  width: 100%;
  white-space: wrap;
`
