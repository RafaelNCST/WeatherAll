import styled from "styled-components";

export const inputSearch = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    margin: 0px auto;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    >div:first-child{
        display: flex;
        gap: 10px;

        input{
        border: none;
        border-bottom: 1px solid white;
        background: none;
        color: white;
        font-size: 200%;
        width: 310px;
        outline: none;
        padding: 5px;

            ::placeholder { 
                color: white;
                opacity: 1; 
            }       
            ::-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: white;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
                color: white;
            }

        }

        button{
            border: none;
            background-color: #eb4262;
            border-radius: 5px;
            width: 100px;
            font-size: 100%;
            font-weight: bolder;
            color: white;
            cursor: pointer;
            user-select: none;

            :hover{
                opacity: 0.8;
            }
        }

    }
    
    @media (max-width: 500px){
        margin-top: 50px;
        >div:first-child{
            flex-direction: column;
            input{
                width: 250px;
            }
            button{
                width: 120px;
                height: 40px;
                margin: 20px auto;
            }
        }
    }
` 

interface warningMessageProps {
    warningOpacity: 0|1;
}

export const warningMessage = styled.div<warningMessageProps>`
    font-size: 16px;
    font-weight: bolder;
    color: #e30523;
    opacity: ${props => props.warningOpacity};
    transition: all ease-in-out .3s;

    @media (max-width: 500px){
        position: absolute;
        bottom: 28px;
    }
`