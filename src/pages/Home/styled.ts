import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    align-items:center;
    flex-direction:column;

    header{
        width: 50%;
        margin: 84px 0 24px;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 60px;
            height: 60px;
            border-radius: 30px;
            margin-left: 7px;
        }
        div{
        display: flex;
        align-items: center;
        }
    }
    input{
        width: 50%;
        padding: 24px;
        background: #E6E6E6;
        border-radius: 5px;
        border: none;
        font-size: 1rem;
        font-weight: 400;
    }
    button{
        width: 50%;
        padding: 24px;
        font-weight: 500;
        background: #ea7c89;
        color:#fff;
        border-radius: 5px;
        margin: 12px 0 84px;
        border: none;
        cursor: pointer;
        transition: filter 0.2 ease-in-out;
        &:hover{
            filter: brightness(0.9);
        }
    }
`