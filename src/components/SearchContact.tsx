import React from 'react'
import styled from '@emotion/styled';

interface Option{
  OnChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SearchBar = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    border-color: black;
`

const SearchContact: React.FC<Option> = ({OnChange}) => {
  return (
    <SearchContainer>
      <SearchBar type="text" placeholder='Search name' onChange={OnChange} />
    </SearchContainer>
  )
}

export default SearchContact