import CardContact from '../components/CardContact'
import ContactList from '../components/ContactList'
import styled from '@emotion/styled'
import Pagination from '../components/Pagination';


const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactListPage = () => {
    return (
        <div>
            <h2>Favorite</h2>
            <CardContact />
            <h2>Contact List</h2>
            <ContactList />
            <PaginationWrapper>
                <Pagination postsPerPage={10} totalPosts={100} />
            </PaginationWrapper>
        </div>
    )
}

export default ContactListPage