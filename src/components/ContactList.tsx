import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client';
import { LOAD_CONTACT_LIST } from '../GraphQL/Queries'
import styled from '@emotion/styled'

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
`

function ContactList() {

  const { error, loading, data } = useQuery(LOAD_CONTACT_LIST);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setContacts(data.contact);
      console.log(data.contact);

    }
  }, [data])

  useEffect(() => {

  })

  return (
    <ListWrapper>
      {
        !contacts.length ?
          <h1>
            no contacts found.
          </h1>
          :
          contacts.map((items) => {
            return <ListItem key={items.id}>
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