export const APIconsume = async (inputValue:string) => {
    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`)
    return response.json()
}
