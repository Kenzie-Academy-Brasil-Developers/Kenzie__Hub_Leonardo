import {styled} from "styled-components"


export const ModalStyle = styled.section`

    color: white;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 500px; 
    flex-direction: column;
    border-radius: 4px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    
    form{
        justify-content: center;
        padding: 0 30px 0px 30px;
        height: 340px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    header{
        display: flex;
        padding: 12px 20px;
        justify-content: space-between;
        border-radius: 4px 4px 0px 0px;
        background: #343B41;
    }

    h1{
        color: #F8F9FA;
        font-size: 14px;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
    }

    span{
        color: #868E96;
        font-size: 16px;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
    }

    h2{
        margin-bottom:20px ;
        color: #F8F9FA;
        font-size: 12.182px;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        line-height: 0px;
    }

    input{
        display: flex;
        width: 100%;
        height: 48px;
        padding: 0px 16.243px;
        align-items: center;
        gap: 10.152px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 1.218px solid #343B41;
        background: #343B41;
    }

    select{
        display: flex;
        width: 100%;
        height: 48px;
        padding: 0px 16.243px;
        align-items: center;
        gap: 10.152px;
        background-color: #343B41;
        color: #F8F9FA;
    }

    button{
        height: 48px;
        padding: 0px 22.334px;
        justify-content: center;
        align-items: center;
        gap: 10.152px;
        border-radius: 4.061px;
        border: 1.218px solid #FF577F;
        background: #FF577F;
        
        color: #FFF;
        font-size: 16px;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        line-height: 26.394px;
    }

`