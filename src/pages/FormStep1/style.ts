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
    label {
        font-size: 13px;

        input {
            display: block;
            margin-top: 7px;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius:.4rem;
            text-transform: none;
            color: #FFF;
            font-size: 15px;
            background-color: #02044a;
        }
    }
    button {
        background-color: #25cd89;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
        padding: 20px 40px;
        border: none;
        border-radius: 30px;
        margin-top: 30px;
        cursor: pointer;
    }
`;
