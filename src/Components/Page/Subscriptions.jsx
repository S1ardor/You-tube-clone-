import { useCallback, useEffect, useState } from "react";
import "./AllPage.css"

const Subscriptions = () => {
  const url = 'https://youtube-v31.p.rapidapi.com/search?q=it&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
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
      }
    }catch(error){
      return error;
    }
  }
},[data])
useEffect(() => {
  handleGetData()
  console.log(data)
},[handleGetData])
console.log(data);
  
  return (
    <div className="music_box">
      <h1>Subscriptions Page</h1>
     <div  className="subscriptions_page">
     {data?.map(item => {
        console.log(item?.snippet?.thumbnails);
        return (
          <div key={item}>
            <img src={item?.snippet?.thumbnails?.default?.url} alt="img"/>
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default Subscriptions
