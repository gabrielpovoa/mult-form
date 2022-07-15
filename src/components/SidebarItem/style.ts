import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.5rem;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 1.1rem;
    color: #b8b8d4;
`;

export const IconArea = styled.div<{ active: boolean}>`
    width: 50px; 
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
    & span {
        font-size: 2rem;
    }
`;

export const Point = styled.div<{ active: boolean}>`
    width: 10px;
    height: 10px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -5px;
    background-color: ${props => props.active ? '#25CD89' : '#02044a'};
`;