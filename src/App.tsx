import GetContactList from './components/ContactList';
import Header from './components/Header';
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import Card from './components/Card';
import Pagination from './components/Pagination';


const PaginationWrapper = styled.div`
    justify-content: center;
`;

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Global styles={
        css`
        body{
          background-color: #efcb48;
        }
        `
      } />
      <Header />
      <h2>Favorite</h2>
      <Card />
      <h2>Contact List</h2>
      <GetContactList />
      <PaginationWrapper>
        <Pagination postsPerPage={10} totalPosts={120} />
      </PaginationWrapper>
    </div>
  );
}

export default App;
