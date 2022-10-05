import styled from '@emotion/styled'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface Option {
    page: number;
    backFunction: () => void;
    forwardFunction: () => void;
}

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginateButton = styled.button`
    border-style: none;
    background: none;
    cursor: pointer;
`

const Pagination = ({ page, backFunction, forwardFunction }: Option) => {
    return (
        <PaginationWrapper>
            <PaginateButton disabled={!page} onClick={backFunction}>
                <IoIosArrowBack size={20} />
            </PaginateButton>
            <div> {page + 1}</div>
            <PaginateButton onClick={forwardFunction}>
                <IoIosArrowForward size={20} />
            </PaginateButton>
        </PaginationWrapper>
    )
}

export default Pagination