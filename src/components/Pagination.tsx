import styled from '@emotion/styled'

interface PageOption {
    postsPerPage: number;
    totalPosts: number;
}

const ListItems = styled.li`
    list-style: none;
`

const ListPagination = styled.ul`
    display: flex;
`

const PaginationNumber = styled.a`
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
`

const Pagination = ({ postsPerPage, totalPosts }: PageOption) => {
    const pageNumber = [];

    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumber.push(index);
    }

    return (
        <div>
            <ListPagination>
                {
                    pageNumber.map((number) => (
                        <ListItems key={number}>
                            <PaginationNumber href="!#">
                                {number}
                            </PaginationNumber>
                        </ListItems>
                    ))
                }
            </ListPagination>
        </div>
    )
}

export default Pagination