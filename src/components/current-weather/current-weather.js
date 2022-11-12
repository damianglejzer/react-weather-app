import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return(
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`images/${data.weather[0].icon}.png`}/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parametr-row">
                        <span className="parametr-label">Details</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Feels like</span>
                        <span className="parametr-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Wind</span>
                        <span className="parametr-value">{Math.round(data.wind.speed)} m/s</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Humidity</span>
                        <span className="parametr-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parametr-row">
                        <span className="parametr-label">Pressure</span>
                        <span className="parametr-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;