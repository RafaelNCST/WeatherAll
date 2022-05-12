import {createGlobalStyle} from "styled-components";

interface BackGroundImageProps {
    BackGroundImage:string;
}

export const GlobalStyle = createGlobalStyle<BackGroundImageProps>`
    html, body{
        background-image: url(${props => props.BackGroundImage});
        background-size: cover;
        background-position: center;
        height: 100%;
        transition: ease-in-out .4s;
        overflow: hidden;
    };
    *{
        padding: 0px;
        margin: 0px;
    }
` 