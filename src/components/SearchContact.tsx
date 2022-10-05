import React from 'react'
import styled from '@emotion/styled';

interface Option{
  OnChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SearchContact: React.FC<Option> = ({OnChange}) => {
  return (
    <SearchContainer>
      <input type="text" placeholder='Search name' onChange={OnChange} />
    </SearchContainer>
  )
}

export default SearchContact