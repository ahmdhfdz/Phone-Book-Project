import React from 'react'
import styled from '@emotion/styled'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillBookmarkStarFill } from 'react-icons/bs'

type Contacts = {
  _id?: number;
  removeContact?: () => void;
  first_name: string;
  last_name: string;
  phone: [{ number: string }]
  del?: boolean;
  fav?: boolean
}

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 20%;
  text-align: center;

  @media (max-width: 1100px){
    flex: 0 0 30%;
  }

  @media (max-width: 620px){
    flex: 0 0 50%;
  }
`

const ListContent = styled.div`
  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
  padding: 10px 0;
  min-height: 100px;
  max-width: 312px;
  position: relative;
`
const ContainerBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  `

const DeleteBtn = styled.div`
  :hover{
    color: red;
  }
  padding: 10px;
`

const FavBtn = styled.div`
  :hover{
    color: gold;
  }
  padding: 10px;
`

const CardContact: React.FC<Contacts> = ({ _id, first_name, last_name, phone, del, fav, removeContact}) => {
  return (
    <ListItem>
      <ListContent>
        <h4>Name: {first_name} {last_name}
        </h4>
        <div>
          Number: {phone[0].number}
        </div>
        <ContainerBtn>
          {!del &&
            <FavBtn onClick={() => console.log("favorite", _id)}>
              <BsFillBookmarkStarFill />
            </FavBtn>
          }
          {!fav &&
            <DeleteBtn onClick={removeContact}>
              <AiFillDelete />
            </DeleteBtn>
          }
        </ContainerBtn>
      </ListContent>
    </ListItem>
  )
}

export default CardContact;