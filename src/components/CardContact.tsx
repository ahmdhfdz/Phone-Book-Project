import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { EDIT_CONTACT } from '../GraphQL/Mutations/EditContact'
import { useMutation } from '@apollo/client'
import ButtonCard from './ButtonCard'

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 20%;
  text-align: center;

  @media (max-width: 1100px){
    flex: 0 0 33.33%;
  }

  @media (max-width: 620px){
    flex: 0 0 50%;
  }
`

const ListContent = styled.div`
  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 10px;
  border-radius: 5px;
  padding: 10px 0;
  min-height: 100px;
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
`

const FavBtn = styled.div`
  :hover{
    color: gold;
  }
  padding: 10px;
`

const EditInput = styled.input`
    border-style: dotted;
    margin: 5px 0;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
`

const NumberButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`

type Contacts = {
  _id?: number;
  removeContact?: () => void;
  addFavorite?: () => void;
  first_name: string;
  last_name: string;
  phone: [{ number: string }]
  del?: boolean;
  fav?: boolean
}

const CardContact: React.FC<Contacts> = ({ _id, first_name, last_name, phone, del, fav, removeContact, addFavorite }) => {
  const [editName, setEditName] = useState(false)
  const [editPhone, setEditPhone] = useState(false)
  const [edited_first_name, setFirstname] = useState('');
  const [edited_last_name, setLastName] = useState('');
  // eslint-disable-next-line
  const [edited_phone, setEditedPhone] = useState('');
  const [showPhones, setShowPhones] = useState(false);
  const [mutateFunction] = useMutation(EDIT_CONTACT, {
    variables: {
      id: _id,
      _set: {
        first_name: edited_first_name,
        last_name: edited_last_name,
      }
    }
  });


  const SetNames = (value: string) => {
    const array = value.split(" ", 2)
    setFirstname(array[0])
    setLastName(array[1])
    console.log(array);
  }

  return (
    <ListItem>
      <ListContent>
        {!editName && !editPhone &&
          <div>
            <h4 onClick={() => setEditName(true)}>
              Name: {first_name} {last_name}
            </h4>
            <NumberButton onMouseEnter={() => setShowPhones(true)} onMouseLeave={() => setShowPhones(false)} onClick={() => setEditPhone(true)}>
              <div>
                Number: {phone[0].number}
              </div>
            </NumberButton>
            {
              showPhones &&
              (
                phone.map(items => (
                  <div key={items.number}>
                    {items.number}
                  </div>
                ))

              )
            }
          </div>
        }
        <div>
          {
            editName &&
            <EditInput placeholder='name' autoFocus onChange={(e) => SetNames(e.target.value)} />
          }
          {
            editPhone &&
            <EditInput placeholder='phone' onChange={(e) => setEditedPhone(e.target.value)} />

          }
        </div>

        {editName &&
          <ButtonCard callbackCancel={() => setEditName(false)} callbackFunction={mutateFunction} />
        }

        {editPhone &&
          <ButtonCard callbackCancel={() => setEditPhone(false)} callbackFunction={mutateFunction} />
        }

        {!editName && !editPhone &&
          <ContainerBtn>
            {!del &&
              <FavBtn onClick={addFavorite}>
                <BsFillBookmarkStarFill />
              </FavBtn>
            }
            {!fav &&
              <DeleteBtn onClick={removeContact}>
                <AiFillDelete />
              </DeleteBtn>
            }
          </ContainerBtn>
        }

      </ListContent>
    </ListItem>
  )
}

type Message = {
  message?: String
}

export const DefaultCard: React.FC<Message> = ({ message }) => {
  return (
    <ListItem>
      <ListContent>
        <h5>{message}</h5>
      </ListContent>
    </ListItem>

  )
}

export default CardContact;