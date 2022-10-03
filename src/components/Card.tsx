import React from 'react'
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
  background-color: #fff;
  margin: 5px;
  border-radius: 5px;
  padding: 10px 0;
`

const Card = () => {
  return (
    <ListWrapper>
        <ListItem>
              <ListContent>
                <h4>Name: John Doe
                    {/* {items.first_name} {items.last_name}  */}
                    </h4>
                <div>
                  Number: 0812812812
                  {/* {items.phones[0].number} */}
                </div>
              </ListContent>
            </ListItem>
    </ListWrapper>
  )
}

export default Card;