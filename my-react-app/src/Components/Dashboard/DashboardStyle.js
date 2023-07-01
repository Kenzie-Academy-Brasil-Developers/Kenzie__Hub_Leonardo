import {styled} from "styled-components"


export const DashboardStyled = styled.header`
@media (width > 769px) {
    width: 100%;

  header{
    padding: 0 20%;
    display: flex;
    justify-content: space-between;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid #1B1D21;
  }
  button{
    height: 32px;
    padding: 0px 16.243px;
    justify-content: center;
    align-items: center;
    gap: 10.152px;

    border-radius: 4px;
    background: #212529;
    color: var(--grey-0, #F8F9FA);
    text-align: center;
    font-size: 12px;
    font-family: Inter;
    font-weight: 600;
    line-height: 28.425px;
  }
  div{
    padding: 0 20%;
    border-bottom: 1px solid #1B1D21;
    display: flex;
    height: 118px;
    justify-content: space-between;
    align-items: center;
  }
    main{
    padding: 20px 250px;
    }
  h2{
    color: #F8F9FA;
    font-size: 18px;
    font-family: Inter;
    font-weight: 700;
    line-height: 28px;
  }
  h4{
    color: #868E96;
    font-size: 12px;
    font-family: Inter;
    line-height: 22px;
  }
  h1{
    color:  #F8F9FA;
    font-size: 18px;
    font-family: Inter;
    font-weight: 700;
    line-height: 28px;
  }
  h5{
    color: #FFF;
    font-size: 16px;
    font-family: Inter;
    line-height: 24.364px;
  }
}

@media (width < 769px) {
  width: 100%;
  header{
    padding: 20px 20px;

    display: flex;
    justify-content: space-between;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid #1B1D21;
  }
  button{
    height: 32px;
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
  div{
    padding: 20px 20px;
    border-bottom: 1px solid #1B1D21;
    display: flex;
    flex-direction: column;
    height: 118px;
    justify-content: space-between;
  }
    main{
    padding: 20px 20px;
    }
  h2{
    color: #F8F9FA;
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
  }
  h4{
    color: #868E96;
    font-size: 12px;
    font-family: Inter;
    line-height: 22px;
  }
}
`