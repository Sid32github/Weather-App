import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import iconweat from './iconweat.png';
import {useState} from "react";
import "./App.css";

function App(){
    const apiKey="d9ae2292338575116b823fc871269649"
    const [inputCity,setInputcity]=useState("")
const[data,setData]=useState({})
const getweather=(cityName)=>{
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apiKey 
    axios.get(apiURL).then((res)=>{
        console.log("response",res.data)
        setData(res.data)
    }).catch((err)=>{
        console.log("err",err)
    });
};
const handleChangeInput=(e)=>{
setInputcity(e.target.value)
}
const handleSearch = () => {
    getweather(inputCity)
  };


  return (
    <div className="col-md-12">
      <div className="weatherBg">
        <h1 className="head">Weather App</h1>
  
        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control" onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      {Object.keys(data).length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultbox">
            <img src={iconweat} className="icn" alt="Smiley face" />
            <h5 className="weCity">
              {data?.name}
            </h5>
            <h6 className="wetem">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      )}
    </div>
  );
  
    }
export default App;