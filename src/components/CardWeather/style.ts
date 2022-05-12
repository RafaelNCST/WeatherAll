import styled from "styled-components";

export const CardWeather = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color:rgba(0,0,0,0.2);
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 300px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 1px;

    *{
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        user-select: none;
        pointer-events: none;
    }

    @media (max-width: 500px) {
        margin-top: 20px;
    }
`

export const cardNames = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    span{
        font-size: 20px;
        font-weight: bolder;
    }

    div{
        background-color: #ed4b11;
        border-radius: 50%;
        padding: 5px;
    }
`

export const cardDate = styled.div`
    margin-top: 5px;
    font-size: 16px;
`

export const cardTemp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div{
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        justify-content: center;
    }
`

export const cardInfosFinal = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`