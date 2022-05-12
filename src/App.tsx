import * as Style from "./AppStyle"
import {GlobalStyle} from "./GlobalStyles"

import { SearchItems } from "./components/SearchItems"
import { CardWeather } from "./components/CardWeather"
import { HeaderComponent } from "./components/HeaderLogo"

import {APIconsume} from "./helpers/APIconsume"
import { ImageHandler } from "./helpers/ImagesBackGroundHelper"

import { useEffect, useState } from "react"

export const App = () => {

  const [searchResult, setSearchResult] = useState<any>({});
  const [searchState, setSearchState] = useState<Boolean>(false);

  const toReceiveAPI = (json:object) => {
    setSearchState(false)
    setSearchResult(json)
    setSearchState(true)
  }

  useEffect( () => {
    (async () => {
      const jsonInitialState = await APIconsume("Manaus")
      setSearchResult(jsonInitialState)
      setSearchState(true)
      console.log(jsonInitialState)
    })();
  }, []);

  return (
    <>
      {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon === "01n" &&
          <GlobalStyle BackGroundImage={ImageHandler.NightBackGround}/>
      }
      {searchState && searchResult.weather[0].main === "Clear" && searchResult.weather[0].icon !== "01n" &&
          <GlobalStyle BackGroundImage={ImageHandler.SunBackGround}/>
      }
      {searchState && searchResult.weather[0].main === "Thunderstorm" &&
          <GlobalStyle BackGroundImage={ImageHandler.ThunderStormBackGround}/>
      }
      {searchState && searchResult.weather[0].main === "Rain" &&
          <GlobalStyle BackGroundImage={ImageHandler.RainBackGround}/>
      }
      {searchState && searchResult.weather[0].main === "Snow" &&
          <GlobalStyle BackGroundImage={ImageHandler.SnowBackGround}/>
      }
      {searchState && searchResult.weather[0].main === "Clouds" &&
          <GlobalStyle BackGroundImage={ImageHandler.OverCastBackGround}/>
      }
      {searchState &&
        <HeaderComponent searchState={searchState} searchResult={searchResult}></HeaderComponent>
      }
      <SearchItems toReceiveAPI={toReceiveAPI}></SearchItems>
      <Style.BoardWeathers>
        {searchState && searchResult &&
          <CardWeather weatherResult={searchResult} ></CardWeather>
        }
      </Style.BoardWeathers>
    </>
  )
}
