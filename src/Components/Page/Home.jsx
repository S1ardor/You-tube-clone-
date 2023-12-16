import "./Home.css"
import { useCallback, useState } from "react"
import { useEffect } from "react"
import { SwiperSlider } from "../Swiper/Swiper";
import { IoFastFood } from "react-icons/io5";

export const Home = () => {

  const [loading, setLoading] = useState(true);
const url = 'https://youtube-v31.p.rapidapi.com/search?q=tesla&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be12371dfbmshc4d13e7c503e779p18b7e6jsna54b3671ded8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const [data, setData] = useState([])
const handleGetData = useCallback(async () => {
  if(!data?.length){
    try{
      const request = await fetch(url, options)
      if(request.status === 200) {
        const response = await request.json()
        setData(response.items)
        setLoading(false)
      }
    }catch(error){
      setLoading(false);
      return error;
    }
  }
},[data])
useEffect(() => {
  handleGetData()
},[handleGetData])




const API = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be12371dfbmshc4d13e7c503e779p18b7e6jsna54b3671ded8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const [udata, setUseData] = useState([])
const getData = useCallback(async () => {
  if(!udata?.length){
    try{
      const request = await fetch(API, option)
      if(request.status === 200) {
        const response = await request.json()
        console.log(response.items);
     
        setUseData(response.items)
        setLoading(false)
      }
    }catch(error){
      setLoading(false);
      return error;
    }
  }
},[udata])
useEffect(() => {
  getData()
},[getData]);



const link = 'https://youtube-v31.p.rapidapi.com/search?q=food&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
const apiOption = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be12371dfbmshc4d13e7c503e779p18b7e6jsna54b3671ded8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const [threedata, setThreData] = useState([])
const threeGetData = useCallback(async () => {
  if(!threedata?.length){
    try{
      const request = await fetch(link, apiOption)
      if(request.status === 200) {
        const response = await request.json()     
        setThreData(response.items);
        setLoading(false)
      }
    }catch(error){
      setThreData(false);
      return error;
    }
  }
},[threedata])
useEffect(() => {
  threeGetData()
},[threeGetData]);

if(loading) {
  return <div className="row">
  <div className="container">
    <div className="grid-row grid-4-4">
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
      <div className="cards">
        <div className="card_image loading"></div>
        <div className="card_title loading"></div>
        <div className="card_description loading"></div>
      </div>
    </div>
  </div>
</div>
}

return (
  <div>
    <div className="home_context">
     <div>
     <h2>Tesla Company</h2>
     <SwiperSlider data={data} active={false}/>
     </div>

     <div className="two_data">
      <h2>Music World</h2>
     <SwiperSlider data={udata} active={true}/>
     </div>

     <div>
      <div className="food_room">
        <h2>Food</h2>
      </div>
     <SwiperSlider data={threedata} active={false}/>
     </div>

    </div>
  </div>
)
}
export default Home
