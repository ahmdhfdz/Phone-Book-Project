import CardContact from '../components/CardContact'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_CONTACT } from '../GraphQL/Mutations/RemoveContact'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { LOAD_CONTACT_LIST } from '../GraphQL/Queries/GetContactList'
import { SearchFilter } from '../helper/SearchFilter'


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

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
`

const PAGE_SIZE = 10;

const ContactListPage = () => {
    const [page, setPage] = useState(0)
    const [searchQuery, setSearchQuery] = useState('');
    const { error, loading, data } = useQuery(LOAD_CONTACT_LIST, {
        variables: {
            limit: PAGE_SIZE,
            offset: PAGE_SIZE * page
        }
    });

    const [DeleteContact] = useMutation(DELETE_CONTACT)

    const DeleteContactFromList = (id: number) => {
        DeleteContact({
            variables: {
                id: id
            }, refetchQueries: [
                {
                    query: LOAD_CONTACT_LIST, variables: {
                        limit: PAGE_SIZE,
                        offset: PAGE_SIZE * page
                    }
                }
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
            <InputContainer>
                <input type="text" placeholder='Search name' onChange={(e) =>
                    setSearchQuery(e.target.value)} />
            </InputContainer>
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
                    SearchFilter(data.contact, searchQuery).map((items: any) => {
                        return <CardContact key={items.id}
                            removeContact={() => DeleteContactFromList(items.id)}
                            _id={items.id}
                            first_name={items.first_name}
                            last_name={items.last_name}
                            phone={items.phones} />
                    })
                }
            </ListWrapper>
            <PaginationWrapper>
                <PaginateButton disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
                    <IoIosArrowBack size={20} />
                </PaginateButton>
                <div> {page + 1}</div>
                <PaginateButton onClick={() => setPage((prev) => prev + 1)}>
                    <IoIosArrowForward size={20} />
                </PaginateButton>
            </PaginationWrapper>
        </div>
    )
}

export default ContactListPage