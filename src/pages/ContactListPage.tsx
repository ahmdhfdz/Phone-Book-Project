import CardContact, { DefaultCard } from '../components/CardContact'
import styled from '@emotion/styled'
import { useContext, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { DELETE_CONTACT } from '../GraphQL/Mutations/RemoveContact'
import { LOAD_CONTACT_LIST } from '../GraphQL/Queries/GetContactList'
import { SearchFilter } from '../helper/SearchFilter'
import Pagination from '../components/Pagination'
import SearchContact from '../components/SearchContact'
import { FavoriteContext } from '../hooks/FavoriteContext'
import { Types } from '../hooks/contactReducer'

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ContainerFav = styled.div`
    max-width: 320px;
`

const TitleStyle = styled.h2`
    margin: 7vh 0 0 2vh;
`

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    phones: [{ number: string; }]
}

const PAGE_SIZE = 10;

const ContactListPage = () => {
    const [page, setPage] = useState(0)
    const [searchQuery, setSearchQuery] = useState('');
    // const context = useContext(AppContext)
    // const { returnValue, Add, Delete } = context
    const { state, dispatch } = useContext(FavoriteContext);

    const AddToFavorite = (id: number, first_name: string, last_name: string) => {
        dispatch({
            type: Types.Add,
            payload: {
                id: id,
                first_name: first_name,
                last_name: last_name
            }
        })
    }

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
            <TitleStyle>Favorite</TitleStyle>
            <ContainerFav>
                {state.contacts.length ?
                    state.contacts.map(items => (
                        <CardContact key={items.id}
                            _id={items.id}
                            first_name={items.first_name}
                            last_name={items.last_name}
                            phone={[{ number: '0812381328' }]}
                            del={true}
                            fav={true}
                        />
                    ))

                    :
                    <DefaultCard message={"Tap Or Click Bookmark Button On List"} />
                }
            </ContainerFav>

            <TitleStyle>Contact List</TitleStyle>
            <SearchContact OnChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)} />
            <ListWrapper>
                {
                    error &&
                    <h1>Error loading contacts.</h1>
                }
                {
                    loading &&
                    <h1>Loading</h1>
                }
                {
                    data &&
                    SearchFilter(data.contact, searchQuery).map((items: Contact) => {
                        return <CardContact key={items.id}
                            removeContact={() => DeleteContactFromList(items.id)}
                            addFavorite={() => AddToFavorite(items.id, items.first_name, items.last_name)}
                            _id={items.id}
                            first_name={items.first_name}
                            last_name={items.last_name}
                            phone={items.phones} />
                    })
                }
            </ListWrapper>
            <Pagination
                page={page}
                backFunction={() => setPage((prev) => prev - 1)}
                forwardFunction={() => setPage((prev) => prev + 1)} />
        </div>
    )
}

export default ContactListPage