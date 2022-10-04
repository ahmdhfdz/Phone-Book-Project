import CardContact from '../components/CardContact'
import styled from '@emotion/styled'
import { useState } from 'react'
import Pagination from '../components/Pagination'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { DELETE_CONTACT } from '../GraphQL/RemoveContact'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { LOAD_CONTACT_LIST } from '../GraphQL/GetContactList'


const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const PaginateButton = styled.button`
  border-style: none;
  background: none;
  cursor: pointer;
`

const PAGE_SIZE = 10;

const ContactListPage = () => {
    const [page, setPage] = useState(0)
    const { error, loading, data } = useQuery(LOAD_CONTACT_LIST, {
        variables:{
            limit: PAGE_SIZE,
            offset: PAGE_SIZE*page
        }
    });
    
    const [DeleteContact] = useMutation(DELETE_CONTACT)

    const DeleteContactFromList = (id:number) =>{
        DeleteContact({
            variables: {
                id:id
            }, refetchQueries:[
                {query: LOAD_CONTACT_LIST}
            ]
        })
    }
  
    return (
        <div>
            <h2>Favorite</h2>
            <CardContact
                _id={0}
                first_name='John'
                last_name='Doe'
                phone={[{ number: '0812381328' }]}
                del={true}
                fav={true}
            />
            <h2>Contact List</h2>
            {/* <ContactList /> */}
            <ListWrapper>
                {
                    error &&
                    <h1>no contacts found.</h1>
                }
                {
                    loading &&
                    <h1>Loading</h1>
                }
                {
                    data &&
                    data.contact.map((items: any) => {
                        return <CardContact key={items.id}
                                _id={items.id}
                                first_name={items.first_name}
                                last_name={items.first_name}
                                phone={[{ number: '0812381328' }]} />
                    })
                }
            </ListWrapper>
            <PaginationWrapper>
                {/* <Pagination postsPerPage={10} totalPosts={100} /> */}
                <PaginateButton disabled={!page} onClick={() => setPage((prev)=> prev - 1)}><IoIosArrowBack size={20} /></PaginateButton>
                <div> {page+1}</div>
                <PaginateButton onClick={() => setPage((prev)=> prev + 1)}><IoIosArrowForward size={20}/></PaginateButton>
            </PaginationWrapper>
        </div>
    )
}

export default ContactListPage