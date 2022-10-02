import React, {useEffect, useState } from 'react' 
import { useQuery, gql} from '@apollo/client';
import {LOAD_CONTACT_LIST} from '../GraphQL/Queries'

function ContactList() {

  const {error, loading, data} = useQuery(LOAD_CONTACT_LIST);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(()=>{
    if(data){
      setContacts(data.contact);
      console.log(data.contact[0].phones[0]);
      
    }
  }, [data])

  useEffect(()=>{
    
  })

  return (
    <div>
        {
          !contacts.length?
          <h1>
            test
          </h1>
          :
          contacts.map((items)=>{
            return <h1>{items.first_name}</h1>
          })
        }
    </div>
  )
}

export default ContactList;