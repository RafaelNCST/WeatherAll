import * as style from "./style"

export const CardWeather = ({weatherResult}:any) => {

    const urlImages = `http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`

    const dateBuilder = (d:Date) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <style.CardWeather>
            <style.cardNames>
                <span>{weatherResult.name}</span>
                <div>{weatherResult.sys.country}</div>
            </style.cardNames>
            <style.cardDate>{dateBuilder(new Date())}</style.cardDate>
            <style.cardTemp>
                <div>
                    <img src={urlImages} alt=""></img>
                    {Math.round(weatherResult.main.temp)}C°
                </div>
                <span>{weatherResult.weather[0].description}</span>
            </style.cardTemp>
            <style.cardInfosFinal>
                <span>Humidity: {weatherResult.main.humidity}%</span>
                <span>Visibility: {weatherResult.visibility}Km</span>
            </style.cardInfosFinal>
        </style.CardWeather>
    )
}