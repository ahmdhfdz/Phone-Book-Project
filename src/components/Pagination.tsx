import React from 'react'
import styled from '@emotion/styled'

interface PageOption {
    postsPerPage: number;
    totalPosts: number;
}

const PaginationWrapper = styled.div`
    width: 100vw;
    justify-content: center;
`

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
        <PaginationWrapper>
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
        </PaginationWrapper>
    )
}

export default Pagination