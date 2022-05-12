import styled from "styled-components";

export const BoardWeathers = styled.div`
    width: 80%;
    height: 250px;
    max-height: 250px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (min-height: 800px){
        height: 500px;
    }
`