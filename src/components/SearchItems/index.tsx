import * as Searchstyle from "./style"
import { useState } from "react"
import {APIconsume} from "../../helpers/APIconsume"

type testeProps = {
    toReceiveAPI: (json:{}) => void
}

export const SearchItems = ({toReceiveAPI}:testeProps) => {

    const [inputValue, setInpuValue] = useState<string>("")
    const [warningOpacity, setWarningOpacity] = useState<0|1>(0)

    const clickSendInpuValue = async() => {
        let json:any = await APIconsume(inputValue);
        if(json.cod === "404"){
            setWarningOpacity(1);
            setTimeout(() => setWarningOpacity(0), 5000)
        }
        else if(inputValue){
            setWarningOpacity(0);
            toReceiveAPI(json);
        }else{
            setWarningOpacity(1);
            setTimeout(() => setWarningOpacity(0), 5000)
        }
    }

    const changeValueInInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInpuValue(e.target.value)
    }

    return (
        <>
            <Searchstyle.inputSearch>
                <div>
                    <input type="text" value={inputValue} onChange={changeValueInInput} placeholder="Search for a city"></input>
                    <button onClick={clickSendInpuValue}>Search</button>
                </div>
                <Searchstyle.warningMessage warningOpacity={warningOpacity}>Type it a valid city</Searchstyle.warningMessage>
            </Searchstyle.inputSearch>
        </>
    )
}

