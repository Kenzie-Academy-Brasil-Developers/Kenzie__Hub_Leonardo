import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #27AE60;
        --color-secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

body{
    background-color: #121214;
}
input,button{
    cursor: pointer;
}

button:hover{
        filter: brightness(75%)
    }
`
