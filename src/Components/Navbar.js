import React from "react";
import { useState } from "react";
import "../App.css";
import logo from './bg.png'
import { Offcanvas } from "react-bootstrap";

import compass from './compass.png'


const Navbar = () => {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(!isOpen)

  const [resString, setResString] = useState({
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1697898045,
      localtime: "2023-10-21 15:20",
    },
    current: {
      last_updated_epoch: 1697897700,
      last_updated: "2023-10-21 15:15",
      temp_c: 16.0,
      temp_f: 60.8,
      is_day: 1,
      condition: {
        text: "Light rain shower",
        icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
        code: 1240,
      },
      wind_mph: 3.8,
      wind_kph: 6.1,
      wind_degree: 300,
      wind_dir: "WNW",
      pressure_mb: 984.0,
      pressure_in: 29.06,
      precip_mm: 0.1,
      precip_in: 0.0,
      humidity: 82,
      cloud: 75,
      feelslike_c: 16.0,
      feelslike_f: 60.8,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 3.0,
      gust_mph: 11.9,
      gust_kph: 19.1,
      air_quality: {
        co: 237.0,
        no2: 14.1,
        o3: 63.7,
        so2: 7.5,
        pm2_5: 1.6,
        pm10: 2.3,
        "us-epa-index": 1,
        "gb-defra-index": 1,
      },
    },
  });
  const [resString2, setResString2] = useState({ status: "ok", data: { aqi: 13, idx: 7021, attributions: [{ "url": "http://worldweather.wmo.int", "name": "World Meteorological Organization - surface synoptic observations (WMO-SYNOP)" }, { "url": "https://in.usembassy.gov/embassy-consulates/new-delhi/air-quality-data/", "name": "U.S. Embassy and Consulates' Air Quality Monitor in India", "logo": "US-StateDepartment.png" }, { "url": "https://waqi.info/", "name": "World Air Quality Index Project" }], "city": { "geo": [22.562629699707, 88.363037109375], "name": "Kolkata US Consulate, India (कोलकाता अमेरिकी वाणिज्य दूतावास)", "url": "https://aqicn.org/city/india/kolkata/us-consulate", "location": "" }, "dominentpol": "pm25", "iaqi": { "dew": { "v": 17 }, "h": { "v": 82 }, "p": { "v": 1019 }, "pm25": { "v": 268 }, "t": { "v": 20 }, "w": { "v": 2 } }, "time": { "s": "2023-12-25 09:00:00", "tz": "+05:30", "v": 1703494800, "iso": "2023-12-25T09:00:00+05:30" }, "forecast": { "daily": { "o3": [{ "avg": 4, "day": "2023-12-23", "max": 23, "min": 1 }, { "avg": 4, "day": "2023-12-24", "max": 27, "min": 1 }, { "avg": 5, "day": "2023-12-25", "max": 26, "min": 1 }, { "avg": 6, "day": "2023-12-26", "max": 28, "min": 1 }, { "avg": 5, "day": "2023-12-27", "max": 26, "min": 1 }, { "avg": 5, "day": "2023-12-28", "max": 29, "min": 1 }, { "avg": 6, "day": "2023-12-29", "max": 32, "min": 1 }, { "avg": 1, "day": "2023-12-30", "max": 1, "min": 1 }], "pm10": [{ "avg": 72, "day": "2023-12-23", "max": 73, "min": 64 }, { "avg": 67, "day": "2023-12-24", "max": 73, "min": 56 }, { "avg": 71, "day": "2023-12-25", "max": 77, "min": 58 }, { "avg": 68, "day": "2023-12-26", "max": 73, "min": 58 }, { "avg": 68, "day": "2023-12-27", "max": 73, "min": 58 }, { "avg": 69, "day": "2023-12-28", "max": 73, "min": 58 }, { "avg": 67, "day": "2023-12-29", "max": 73, "min": 53 }, { "avg": 70, "day": "2023-12-30", "max": 73, "min": 58 }, { "avg": 94, "day": "2023-12-31", "max": 123, "min": 52 }], "pm25": [{ "avg": 173, "day": "2023-12-23", "max": 174, "min": 165 }, { "avg": 167, "day": "2023-12-24", "max": 174, "min": 157 }, { "avg": 171, "day": "2023-12-25", "max": 179, "min": 159 }, { "avg": 169, "day": "2023-12-26", "max": 174, "min": 159 }, { "avg": 168, "day": "2023-12-27", "max": 174, "min": 159 }, { "avg": 170, "day": "2023-12-28", "max": 174, "min": 159 }, { "avg": 168, "day": "2023-12-29", "max": 174, "min": 154 }, { "avg": 171, "day": "2023-12-30", "max": 174, "min": 159 }, { "avg": 204, "day": "2023-12-31", "max": 252, "min": 152 }] } }, "debug": { "sync": "2023-12-25T13:21:10+09:00" } } });

  const apiKey2 = "02f08fd72833721d33016717228c9329297010b0"
  const url2 = `https://api.waqi.info/feed/${location}/?token=${apiKey2}`

  const apiKey = "69cd96ec13c844d487674304232110";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  const gotData = async () => {
    try {
      let res = await fetch(url);
      let res2 = await fetch(url2);
      let data2 = await res2.json();
      let data = await res.json();
      setResString2(data2);
      setResString(data);
      setIsOpen(false);
      console.log(resString);
      console.log(resString2);
    } catch (e) {
      console.log(e);
    }
  };
  
  function updateLocation(e) {
    setLocation(e.target.value);
  }
  const cardHeading = "text-sm text-thin text-white/80 self-start mb-2"
  const heading = "text-white mx-2 text-4xl font-bold"
  const air_quality = [{
    des: "Air quality is good, enjoy the breeze, take a walk in the park.",
    color: "text-green-500"
  },
  {
    des: "Air quality is moderate.",
    color: "text-green-700"
  }, {
    des: "Air Quality is unhealthy for sensitive groups.",
    color: "text-yellow-400"
  },
  {
    des:
      "Unhealthy, it's advisable to wear a face mask.",
    color: "text-yellow-600"
  },
  {
    des:
      "Very Unhealthy, advisable to avoid leaving your house.",
    color: "text-red-500"
  },
  {
    des: "let's just say that you shouldn't be at this place.",
    color: "text-red-700"
  }]


  return (
    <main className=" flex flex-col animate__animated animate__fadeIn animate__delay-1s justify-center items-center ">
      <nav className="flex align-middle justify-between w-full  h-min  md:py-2  py-1 animate__animated animate__fadeInDown ">
        <img
        alt="Logo"
          src={logo}
          height={70}
          width={70}
          className="m-0 p-0"
        />
        <button className='md:hidden mx-4 my-3 cursor-pointer w-9 h-9 bg-none appearance-none' onClick={handleClose}>
          <div className="bar block h-[3px] w-full rounded-md my-1 bg-black " ></div>
          <div className="bar block h-[3px] w-full rounded-md my-1 bg-black "></div>
          <div className="bar block h-[3px] w-full rounded-md bg-black my-1 "></div>
        </button>
        <div className="hidden md:flex justify-end mx-3 align-middle">
          <form className="my-2 justify-end hidden md:flex items-center align-middle">
            <input type="text"
              onChange={updateLocation}
              placeholder="Search"
              className="bg-black text-white py-1  text-base  w-1/2 border-2 border-gray-500 rounded-lg font-base"
            />
          </form>
          <button onClick={gotData} className="self-center hidden md:flex ml-2 rounded-lg bg-none" >
            Submit
          </button>
        </div>

        <Offcanvas className="bg-transparent backdrop-blur-sm md:hidden" show={isOpen} onHide={handleClose} placement="top" >
          <Offcanvas.Header closeButton >
          </Offcanvas.Header>
          <Offcanvas.Body className='md:hidden'>
            <form className="my-2 justify-end self-end ">
              <input type="text"
                value={location}
                onChange={updateLocation}
                placeholder="Search"
                className="bg-black text-white py-1  text-base  w-1/2 border-2 border-gray-500 rounded-lg font-base"
              />
            </form>
            <button onClick={gotData} className="ml-2 rounded-lg bg-none" >
              Submit
            </button>

          </Offcanvas.Body>
        </Offcanvas>
      </nav>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col align-top justify-center bg-blue-400 backdrop-blur-2xl w-fit rounded-md pt-1 px-1 py-3 items-center my-4 mx-4 max-w-md border-1 border-blue-300">
          <h3 className="text-sm text-thin text-white/80 self-start mb-2">
            Forecast
          </h3>
          <div className="flex flex-row justify-center align-middle px-10 py-3 md:px-10">
            <h1 className="text-white mx-2 text-6xl font-bold">
              {resString.current.temp_c}&deg;C
            </h1>
            <div className="mx-2 border-l-2 px-2 h-fit ">
              <h2 className="text-white font-bold md:text-xl text-xl">
                {resString.location.name},
              </h2>
              <h2 className="text-white font-bold md:text-xl text-xl">
                {resString.location.country}
              </h2>
            </div>

          </div>
          <h1 className="text-white mx-2 text-lg font-bold">
            Feels like {resString.current.feelslike_c}&deg;C due to other factors.
          </h1>
          <div className="flex flex-row justify-center px-10 py-2 align-middle ">
            <img src={resString.current.condition.icon} alt="It's supposed to be a pic of clouds or something, idk" className="" height={70} width={70} />
            <h3 className="text-2xl text-white font-semibold py-4 ">
              {resString.current.condition.text}
            </h3>
          </div>

          <div>
          </div>

        </div>

        <div className="flex flex-col align-top justify-center bg-blue-400 backdrop-blur-lg w-fit rounded-md pt-1 px-1 py-4 items-center my-4 mx-4 max-w-md border-1 border-blue-300">

          <h3 className={cardHeading + "no-underline mb-3" }  >
            Air Quality
          </h3>
          <h3 className={heading}>
            AQI
          </h3>
          <h3 className={`${air_quality.at(resString2.data.aqi/100).color} font-bold  text-2xl`}>
            {resString2?.data.aqi}
          </h3>
          <h1 className={`${air_quality.at(resString2.data.aqi/100).color} font-bold text-xl my-2 text-center`}>
            {air_quality.at(resString2.data.aqi/100).des}
          </h1>
          <ul className="list-none flex flex-row justify-center my-2">
            <li className="flex flex-col align-middle justify-center border-r-2 px-2 border-l-white">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                PM 2.5
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.pm2_5}
              </p>
            </li>
            <li className="flex flex-col align-middle justify-center border-r-2 px-2 border-l-white">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                PM 10
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.pm10}
              </p>
            </li>
            <li className="flex flex-col align-middle justify-center border-r-2 px-2 border-l-white">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                NO2
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.no2}
              </p>
            </li>
            <li className="flex flex-col align-middle justify-center border-r-2 px-2 border-l-white">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                SO2
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.so2}
              </p>
            </li>
            <li className="flex flex-col align-middle justify-center border-r-2 px-2 border-l-white">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                O3
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.o3}
              </p>
            </li>
            <li className="flex flex-col align-middle justify-center px-2 ">
              <p className="self-center text-center text-white font-base underline underline-offset-2">
                CO
              </p>
              <p className="self-center text-center text-white font-base">
                {resString.current.air_quality.co}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-24 ">
        <div className="flex flex-col align-top justify-center bg-blue-400 backdrop-blur-2xl rounded-md pt-1 px-1 py-3 items-center my-4 mx-4  border-1 border-blue-300 max-w-fit">
          <h3 className="text-sm text-thin text-white/80 self-start mb-2">
            Winds and Precipitation
          </h3>
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col sm:flex-row md:border-r-2 md:border-r-white/45 mx-2 my-2">
              <div className="mx-2">
                <div className="flex flex-row justify-center align-middle px-10 py-3 md:px-10">
                  <h1 className="text-white mx-2 text-4xl font-semibold">
                    {resString.current.wind_kph}
                  </h1>
                  <div className=" px-1 h-fit ">
                    <h2 className="text-white opacity-70 font-bold  text-sm">
                      KPH
                    </h2>
                    <h2 className="text-white font-bold  text-">
                      Wind
                    </h2>
                  </div>
                </div>
                <hr color="" className="border-white border-2 mx-2" />
                <div className="flex flex-row justify-center align-middle px-10 py-3 md:px-10">
                  <h1 className="text-white mx-2 text-4xl font-semibold">
                    {resString.current.gust_kph}
                  </h1>
                  <div className=" px-1 h-fit ">
                    <h2 className="text-white opacity-70 font-bold text-md">
                      KPH
                    </h2>
                    <h2 className="text-white font-bold text-md">
                      Gust
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mx-5 flex flex-col items-center mt-2 pt-2">
                <div className="self-center justify-center item-center h-6">
                  <p className="font-semibold text-white/70 text-lg">
                    N
                  </p>
                </div>
                <div className="flex align-middle items-center flex-row justify-between w-32">
                  <p className="font-semibold text-white/70 text-lg">
                    W
                  </p>
                  <img src={compass} width={70} height={70} className={`align-middle rotate-[${resString.current.wind_degree}deg]`} alt="It was supposed to be a comapass needle, which doesn't work anyhow." />
                  <p className="font-semibold text-white/70 text-lg">
                    E
                  </p>
                </div>
                <div className="h-10 my-1">
                  <p className="font-semibold text-white/70 text-lg">
                    S
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mx-4">
              <div className="flex flex-row justify-center align-middle px-10 py-3 md:px-10">
                <svg className=" fill-white/75 my-2" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zM81.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6S-3.3 490.7 1.9 478.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm120 0c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6zm244.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6s17.8 19.3 12.6 31.5zM313.5 353.9c12.2 5.2 17.8 19.3 12.6 31.5l-48 112c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5l48-112c5.2-12.2 19.3-17.8 31.5-12.6z" /></svg>
                <h1 className="text-white mx-2 text-4xl font-semibold">
                  {resString.current.precip_mm}
                </h1>
                <div className=" px-1 h-fit ">
                  <h2 className="text-white opacity-70 font-bold text-md">
                    mm
                  </h2>
                  <h2 className="text-white font-bold text-md">
                    in last 24 hr
                  </h2>
                </div>
              </div>
              <hr color="" className="border-white border-2 mx-2" />
              <div className="flex flex-row justify-center align-middle px-10 py-3 md:px-10">
                <svg xmlns="http://www.w3.org/2000/svg" className=" fill-white/75 my-2" height="30" width="30" viewBox="0 0 576 512"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" /></svg>
                <h1 className="text-white mx-2 text-4xl font-semibold">
                  Upto {resString.current.vis_km}
                </h1>
                <div className=" px-1 h-fit ">
                  <h2 className="text-white opacity-70 font-bold text-md">
                    Km
                  </h2>
                  <h2 className="text-white font-bold text-md">
                    of Visiblity
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer className="flex flex-col w-full justify-center items-center bg-blue-500 bottom-0 left-0">
        <p className="text-white text-center">
          Last Updated at {resString.current.last_updated}
        </p>
        <p className="text-white text-center">
          Developed by <a className="font-semibold" href="https://www.linkedin.com/in/deepanshu-thakur-92a17a262">
            Deepanshu Thakur
          </a> and <a className="font-semibold" href="www.linkedin.com/in/chirag-sharma-0551a1260">
            Chirag Sharma
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Navbar;