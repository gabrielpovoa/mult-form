import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    align-items: center;
    border: 2px solid ${props => props.selected ? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    cursor: pointer;

    &:hover {
        border: 2px solid #496459;
    }
`;
export const Icon = styled.div`
    width: 60px; height: 60px;
    border-radius: 50%;
    background-color: #191a59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2Rem;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: .7rem;
`;

export const Description = styled.div`
    font-size: .8rem;
    color: #b8b8d4;
`;
