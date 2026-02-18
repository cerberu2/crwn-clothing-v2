import { styled } from 'styled-components';


export const CategoryContainer = styled.div`
    display: flex;
    grid-template-columns: repeat(auto-4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    .title {
        font-size: 38px;
        margin-bottom: 25px;
        text-align: center;
    }
`

export const Title = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`