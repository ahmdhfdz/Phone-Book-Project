import React, { useEffect } from 'react'
import { useContactList } from '../GraphQL/GetContactList'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;
  cursor: pointer;

  @media (min-width: 420px){
    flex: 0 0 20%;
  }
`

const ListContent = styled.div`
  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
  padding: 10px 0;
  min-height: 100px;
`

function ContactList() {

  const { error, loading, data } = useContactList(10, 0)

  const navigate = useNavigate();

  useEffect(() => {
    
  }, [data])

  return (
    <ListWrapper>
      {
        error &&
        <h1>
          no contacts found.
        </h1>
      }
      {
        loading &&
        <h1>
          Loading
        </h1>
      }
      {
        data &&
        data.contact.map((items: any) => {
          return <ListItem key={items.id} onClick={() => navigate('contact-detail')}>
            <ListContent>
              <h4>Name: {items.first_name} {items.last_name} </h4>
              <div>
                Number: {items.phones[0].number}
              </div>
            </ListContent>
          </ListItem>
        })
      }
    </ListWrapper>
  )
}

export default ContactList;