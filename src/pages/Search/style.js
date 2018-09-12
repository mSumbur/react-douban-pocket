import styled from 'styled-components'

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  padding: 10px;
  ::before {
    display: inline-block;
    font-family: 'my-icon' !important;
    font-size: 1.75rem;
    content: '\\e986';
    color: dimgrey;
    width: 50px;
    height: 53px;
    line-height: 53px;
    text-align: center;
    border-top: 1px solid #e3e3e3;
    border-left: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 0 5px;
  font-size: 20px;
  outline: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  border-right: none;
  border-left: none;
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
  width: 55px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: #3ca2ff;
  outline: none;
  cursor: pointer;
  border: none;
`

export const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 65px;
  padding: 0 10px;
`

export const SearchMore = styled.div`
  display: none;
  margin: 10px 0;
  text-align: center;
  border-radius: 10px;
  background: #ccc;
  &.show {
    display: block;
  }
  @keyframes isBottom {
    0% { height: 0.5rem; }
    50% { height: 1rem; }
    100% { height: 1.5rem; }
  }
`

export const NavBarWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  font-size: 12px;
  a {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #262626;
    background: #f6f6f6;
  }
  a::before {
    display: block;
    margin-bottom: 4px;
    font-family: "my-icon" !important;
    font-size: 24px;
  }
  a:nth-child(1)::before {
    content: '\\e91f';
  }
  a:nth-child(2)::before {
    content: '\\e914';
  }
  a:nth-child(3)::before {
    content: '\\e911';
  }
  .show {
    color: #318dff;
  }
`

export const NavItem = styled.button`
  background: #f6f6f6;
  outline: none;
  border: 0;
  ::before {
    display: block;
    margin-bottom: 8px;
    font-family: "my-icon";
    font-size: 24px;
  }
`

export const Tip = styled.div`
  width: 100%;
  margin-top: 10px;
  color: #ccc;
  font-size: 14px;
  text-align: center;
`