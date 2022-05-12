import * as style from "./style"
import ImageSun from "../../assets/images/SunLogo.png"
import imageNight from "../../assets/images/Night.png"
import ImageStorm from "../../assets/images/Storm.png"
import ImageIce from "../../assets/images/Invern.png"
import ImageOvercast from "../../assets/images/SunNublado.png"

interface searchProps {
  searchState: Boolean,
  searchResult: any

}

export const HeaderComponent = ({searchState,searchResult}:searchProps) => {
    return (
        <style.HeaderStyleComponent>
            <div> 
            {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon === "01n" &&
              <img src={imageNight} alt=""/>
            }
            {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon !== "01n" &&
              <img src={ImageSun} alt=""/>
            }
            {searchState && searchResult.weather[0].main === "Thunderstorm" &&
              <img src={ImageStorm} alt=""/>
            }
            {searchState && searchResult.weather[0].main === "Rain" &&
              <img src={ImageStorm} alt=""/>
            }
            {searchState && searchResult.weather[0].main === "Snow" &&
              <img src={ImageIce} alt=""/>
            }
            {searchState && searchResult.weather[0].main === "Clouds" &&
              <img src={ImageOvercast} alt=""/>
            }
          </div>
        </style.HeaderStyleComponent>
    )
}