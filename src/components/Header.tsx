import React from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
    background: black;
    padding: 0;
    display: flex;
    padding: 15px;
`;

const HeaderText = styled.h1`
    color: #FFF;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderText>Phone Book</HeaderText>
    </HeaderWrapper>
    // <div>
    //     <h1>Header</h1>
    // </div>
  )
}

export default Header