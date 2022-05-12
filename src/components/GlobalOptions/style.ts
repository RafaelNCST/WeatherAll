import {createGlobalStyle} from "styled-components";

interface BackGroundImageProps {
    BackGroundImage:string;
}

export const GlobalStyle = createGlobalStyle<BackGroundImageProps>`
    html, body{
        background: url(${props => props.BackGroundImage}) no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        transition: .4s ease-in-out;
        overflow: hidden;
    };
    *{
        padding: 0px;
        margin: 0px;
    }
` 