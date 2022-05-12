import {GlobalStyle} from "./style";
import NightBackGround from "../../assets/images/NightBackGround.jpg"
import SunBackGround from "../../assets/images/SunBackGround.jpg"
import ThunderStormBackGround from "../../assets/images/ThunderStormBackGround.jpg"
import RainBackGround from "../../assets/images/RainBackGround.jpg"
import SnowBackGround from "../../assets/images/SnowBackGround.jpg"
import OverCastBackGround from "../../assets/images/OverCastBackGround.png"

interface resultsProps {
    searchResult: any,
    searchState: Boolean
}

export const GlobalOptions = ({searchResult, searchState}: resultsProps) => {
    return (
        <>
            {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon === "01n" &&
                <GlobalStyle BackGroundImage={NightBackGround}/>
            }
            {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon !== "01n" &&
                <GlobalStyle BackGroundImage={SunBackGround}/>
            }
            {searchState && searchResult.weather[0].main === "Thunderstorm" &&
                <GlobalStyle BackGroundImage={ThunderStormBackGround}/>
            }
            {searchState && searchResult.weather[0].main === "Rain" &&
                <GlobalStyle BackGroundImage={RainBackGround}/>
            }
            {searchState && searchResult.weather[0].main === "Snow" &&
                <GlobalStyle BackGroundImage={SnowBackGround}/>
            }
            {searchState && searchResult.weather[0].main === "Clouds" &&
                <GlobalStyle BackGroundImage={OverCastBackGround}/>
            }
      </>
    )
}