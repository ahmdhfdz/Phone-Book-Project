// import { useContactList } from '../GraphQL/GetContactList'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { DELETE_CONTACT } from '../GraphQL/RemoveContact'

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

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
  position: relative;
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

const ContainerBtn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  `

function ContactList(props: any) {

  // const { error, loading, data } = useContactList(10, props.offset)

  // const navigate = useNavigate();

  return (
    // <ListWrapper>
    //   {
    //     error &&
    //     <h1>
    //       no contacts found.
    //     </h1>
    //   }
    //   {
    //     loading &&
    //     <h1>
    //       Loading
    //     </h1>
    //   }
    //   {
    //     data &&
    //     data.contact.map((items: any) => {
    //       return <ListItem key={items.id} 
    //       // onClick={() => navigate('contact-detail')}
    //       >
    //         <ListContent>
    //           <div>
    //             <h4>Name: {items.first_name} {items.last_name} </h4>
    //             <div>
    //               Number: {items.phones[0].number}
    //             </div>
    //           </div>
    //           <ContainerBtn>
    //             <FavBtn onClick={()=>console.log("favorite")}>
    //               <BsFillBookmarkStarFill />
    //             </FavBtn>
    //             <DeleteBtn onClick={()=>console.log("delete", items.id)}>
    //               <AiFillDelete />
    //             </DeleteBtn>
    //           </ContainerBtn>
    //         </ListContent>
    //       </ListItem>
    //     })
    //   }
    // </ListWrapper>
    <div></div>
  )
}

export default ContactList;