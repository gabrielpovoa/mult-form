import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #b8b8d4;
    }
    h1 {
        margin: 0;
        margin-block: 15px;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #16195C;
        margin-block: 30px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Content = styled.div`
    display: block;
    margin-block: 1rem;
`;
