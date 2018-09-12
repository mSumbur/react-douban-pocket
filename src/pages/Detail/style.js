import styled from 'styled-components'

export const DetailPage = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const PageHeader = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  background: #318dff;
  .close {
    position: absolute; 
    left: 5px;
    color: #fff;
  }
`

export const PageContent = styled.div`
  width: 100%;
  padding: 0 10px;
  .movie-pic {
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    border: 1px solid #ccc;
  }
  .casts {
    display: flex;
    list-style-type: none;
    padding: 0;
    overflow-x: scroll;
  }
  .cast {
    width: 100px;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }
`
// .content-page .page-card {
//   padding: 10px 10px 0;
// }
// .content-page .page-content {
//   padding: 0 10px;
// }
// .casts-list {
//   display: flex;
//   justify-content: space-around;
//   list-style-type: none;
//   padding: 0;
//   text-align: center;
// }
// .cast-item a {
//   display: inline-block;
//   width: 50px;
//   height: 50px;
// }
// .cast-item a img {
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
// }
// .cast-item h6 {
//   margin: 0;
// }
