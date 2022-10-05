import { MdCancel } from 'react-icons/md'
import styled from '@emotion/styled'
import { BsFillBookmarkStarFill } from 'react-icons/bs'

const ContainerBtnCancel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  `

const DeleteBtn = styled.div`
  :hover{
    color: red;
  }
`

const FavBtn = styled.div`
  :hover{
    color: gold;
  }
  padding: 10px;
`

const ContainerBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  `

interface Props {
    callbackCancel: () => void;
    callbackFunction: () => void
}

const ButtonCard : React.FC<Props>= ({ callbackCancel, callbackFunction }) => {
    return (
        <div>
            <ContainerBtnCancel>
                <DeleteBtn onClick={callbackCancel}>
                    <MdCancel size={20} />
                </DeleteBtn>
            </ContainerBtnCancel>
            <ContainerBtn>
                <FavBtn onClick={callbackFunction}>
                    <BsFillBookmarkStarFill />
                </FavBtn>
            </ContainerBtn>
        </div>
    )
}

export default ButtonCard