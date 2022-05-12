import * as Style from "./AppStyle"

import { SearchItems } from "./components/SearchItems"
import { CardWeather } from "./components/CardWeather"
import { HeaderComponent } from "./components/HeaderLogo"
import { GlobalOptions } from "./components/GlobalOptions"

import {APIconsume} from "./helpers/APIconsume"

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
      <GlobalOptions searchResult={searchResult} searchState={searchState}></GlobalOptions>
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
