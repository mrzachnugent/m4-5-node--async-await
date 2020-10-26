import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1;
        backdrop-filter: blur(8px)
    }

    .modal {
        background: #fff;
        height: 400px;
        width: 600px;
        border-radius: 15px;
        margin: 150px auto 0 auto;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        font-size: 21px;
        font-weight: 600;
        padding: 50px 20px 20px 20px;
        position: relative;
        
    }

`;
