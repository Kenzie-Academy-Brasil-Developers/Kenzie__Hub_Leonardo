import {styled} from "styled-components"


export const LoginStyle = styled.header`
@media (width > 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div{
        margin-top: 30px;
        align-items: center;
        display:flex;
        flex-direction:column;
        width: 369px;
        height: 502px;
        padding: 42px 22px 42px 22px;
        border-radius: 4px;
        gap: 22px;
        border-radius: 4px;
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }
    
    h1{
        color: var(--grey-0, #F8F9FA);

        font-size: 18px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        line-height: 28px;
    }
    input[type="email"], input[type="password"] {
        border-radius: 4px;
        border: 1.218px solid var(--grey-0, #F8F9FA);
        background: var(--grey-2, #343B41);

        display: flex;
        width: 329.929px;
        height: 48px;
        padding: 0px 16.243px;
        align-items: center;
        gap: 10.152px;
        color: var(--grey-0);
    }

    button{
    display: flex;
    width: 324px;
    height: 48px;
    padding: 0px 22.334px;
    justify-content: center;
    align-items: center;
    gap: 10.152px;
    }

    .Entry{
        border-radius: 4.061px;
        border: 1.218px solid  #FF577F;
        background: #FF577F;
    }
    .sign-up{
        border-radius: 4px;
        border: 1.218px solid #868E96;
        background: #868E96
    }
    h2{
        margin-right: 90%;
        color: var(--grey-0, #F8F9FA);
        font-size: 12.182px;
        line-height: 0px;
        font-family: 'Inter', sans-serif;
    }
    h3{
        color: #868E96;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        font-family: 'Inter', sans-serif;
    }
}

@media (width < 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div{
        margin-top: 30px;
        display: flex;
        padding: 33.691px 17.648px;
        flex-direction: column;
        align-items: center;
        gap: 17.648px;
        border-radius: 4px;
        gap: 22px;
        border-radius: 4px;
        background: #212529;
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }
    
    h1{
        color: var(--grey-0, #F8F9FA);

        font-size: 18px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        line-height: 28px;
    }
    input[type="email"], input[type="password"] {
         color: #F8F9FA;
        border-radius: 4px;
        border: 1.218px solid var(--grey-0, #F8F9FA);
        background: var(--grey-2, #343B41);

        display: flex;
        width: 264.658px;
        height: 38.504px;
        padding: 0px 13.029px;
        align-items: center;
        gap: 8.143px;
    }

    button{
    display: flex;
    width: 259.902px;
    height: 38.504px;
    padding: 0px 22.334px;
    justify-content: center;
    align-items: center;
    gap: 10.152px;
    }

    .Entry{
        border-radius: 4.061px;
        border: 1.218px solid  #FF577F;
        background: #FF577F;
    }
    .sign-up{
        border-radius: 4px;
        border: 1.218px solid #868E96;
        background: #868E96
    }
    h2{
        margin-right: 90%;
        color: var(--grey-0, #F8F9FA);
        font-size: 12.182px;
        line-height: 0px;
        font-family: 'Inter', sans-serif;
    }
    h3{
        color: #868E96;
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        font-family: 'Inter', sans-serif;
    }
}

`