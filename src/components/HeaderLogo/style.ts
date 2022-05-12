import styled from "styled-components"

export const HeaderStyleComponent = styled.header`
    width: 100%;
    background-color: none;
    height: 100px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 5px #282829;

    *{
        user-select: none;
        pointer-events: none;
    }

    div{
        width: 200px;
        margin-left: 100px;
        display: flex;
        align-items: center;

        img{
            width: 200px;
            height: 100px;
        }
    }

    @media (max-width: 500px){
        div{
            margin-left: 0px;
            margin: auto;
        }
    }
`
