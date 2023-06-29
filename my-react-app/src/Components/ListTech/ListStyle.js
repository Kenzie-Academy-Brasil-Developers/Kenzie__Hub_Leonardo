import {styled} from "styled-components"


export const LoginStyle = styled.section`

width: 100%;

@media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 0 20px;
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1{
        color: #F8F9FA;
        font-size: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
    }
    button{
        background-color: #212529;
        color: #FFF;
        width: 32.485px;
        height: 32px;
    }

    ul{
        display: flex;
        width: 100%;
        padding: 22px 19px;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        border: 1px solid red;
        border-radius: 4px;
        background: #212529;
    }
}

@media (min-width: 769px) {
    
}

`