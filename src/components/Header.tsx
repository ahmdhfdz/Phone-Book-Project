import { useState } from 'react'
import styled from '@emotion/styled'
import { AiOutlineBars } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

const white = '#FFF'

const Container = styled.div`
  background: black;
    padding: 0;
    padding: 15px;
    border-radius: 10px;
`

const HeaderWrapper = styled.div`
    display: flex;
`;

const HeaderText = styled.h1`
    color: ${white};
    user-select: none; 
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
`;

const Bar = styled.div`
  color: ${white};
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Link = styled.a`
  text-decoration: none;
  color: ${white};
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
  :hover{
    color: yellow;
  }
  :active{
    color: gray;
  }
`

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const openNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <HeaderWrapper>
        <Bar onClick={openNavBar}>
          <AiOutlineBars size={'2em'} />
        </Bar>
        <HeaderText> Phone Book </HeaderText>
      </HeaderWrapper>
      {
        isOpen &&
        <div>
          <Link onClick={() => navigate('/')}>Contacts</Link>
          <Link onClick={() => navigate('form-contact')}>Form</Link>
        </div>
      }
    </Container>
  )
}

export default Header