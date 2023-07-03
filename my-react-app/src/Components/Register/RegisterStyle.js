import {styled} from "styled-components"


export const RegisterStyle = styled.header`
@media (width > 769px) {
    padding: 50px;
    display: flex;
    height: 971px;
    justify-content: center;
    .header{
        display: flex;
        align-items: top;
        justify-content: space-between;
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .errorStyle{
        color: #FF577F;
    }
    .forms{
        display: flex;
        padding: 42px 22px;
        flex-direction: column;
        gap: 22px;
        
        border-radius: 4px;
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    h1{
        text-align: center;
        color: #F8F9FA;
        font-size: 18px;
        font-family: Inter;
        font-weight: 700;
        line-height: 28px;
    }
    h3{
        text-align: center;
        color: #868E96;
        font-size: 12px;
        font-family: Inter;
        line-height: 22px;
    }
    h2{
        color: #F8F9FA;
        font-size: 12.182px;
        font-family: Inter;
        line-height: 0px;
    }

    input[type="email"],select,input[type="text"], input[type="password"] {
        display: flex;
        width: 329.929px;
        height: 48px;
        padding: 0px 16.243px;
        align-items: center;
        gap: 10.152px;

        border-radius: 4px;
        border: 1.218px solid  #343B41;
        background: #343B41;
        color: #fff;
    }

    .back{
        height: 40.11px;
        padding: 0px 16.243px;
        justify-content: center;
        align-items: center;
        gap: 10.152px;

        border-radius: 4px;
        background: #212529;

        color: #F8F9FA;
        text-align: center;
        font-size: 12px;
        font-family: Inter;
        font-weight: 600;
        line-height: 28.425px;
    }

    .sign-up{
        display: flex;
        width: 326px;
        height: 48px;
        padding: 0px 22.334px;
        justify-content: center;
        align-items: center;
        gap: 10.152px;
        text-decoration: none;
        border-radius: 4px;
        border: 1.218px solid #59323F;
        background: #59323F;

        color: #FFF;
        font-size: 16px;
        font-family: Inter;
        font-weight: 500;
        line-height: 26.394px;
    }
}










@media (width < 769px) {
    padding: 50px;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    .header{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .errorStyle{
        color: #FF577F;
    }
    .forms{
        margin-bottom: 20px;
        display: flex;
        max-width: 295.827px;
        padding: 42px 22px;
        flex-direction: column;
        gap: 22px;
        
        border-radius: 4px;
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }

    h1{
        text-align: center;
        color: #F8F9FA;
        font-size: 18px;
        font-family: Inter;
        font-weight: 700;
        line-height: 28px;
    }
    h3{
        text-align: center;
        color: #868E96;
        font-size: 12px;
        font-family: Inter;
        line-height: 22px;
    }
    h2{
        
        color: #F8F9FA;
        font-size: 12.182px;
        font-family: Inter;
        line-height: 0px;
    }

    input[type="email"],select,input[type="text"], input[type="password"] {
        display: flex;
        width: 263.788px;
        height: 38.377px;
        padding: 0px 12.987px;
        align-items: center;
        gap: 10.152px;

        border-radius: 4px;
        border: 1.218px solid  #343B41;
        background: #343B41;
        color: #fff;
    }

    .back{
        height: 38.377px;
        padding: 0px 16.243px;
        justify-content: center;
        align-items: center;
        gap: 10.152px;

        border-radius: 4px;
        background: #212529;

        color: #F8F9FA;
        text-align: center;
        font-size: 12px;
        font-family: Inter;
        font-weight: 600;
        line-height: 28.425px;
    }

    .sign-up{
        display: flex;
        width: 260.647px;
        height: 38.377px;
        padding: 0px 22.334px;
        justify-content: center;
        align-items: center;
        gap: 10.152px;

        border-radius: 4px;
        border: 1.218px solid #59323F;
        background: #59323F;

        color: #FFF;
        font-size: 16px;
        font-family: Inter;
        font-weight: 500;
        line-height: 26.394px;
    }
}

`