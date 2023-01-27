

import { WiSunset } from "react-icons/wi";



const Info = ({ state, info }) => {
    return (
        <div>
            {state ? <div className="info">

                <p id="city"> {info.name}, {info.sys.country}</p>
                <div className="genelDeger">
                    <p id="sicaklik">{info.main.temp}</p><WiSunset className="fa-c" />
                </div>

                <p id="havaDurumu">{info.weather[0].description}</p>
                <div className="his">
                    <p id="hissedilen">Feels Like: {info.main.feels_like} </p>
                </div>

            </div> : null
            }
        </div>)
}

export default Info;