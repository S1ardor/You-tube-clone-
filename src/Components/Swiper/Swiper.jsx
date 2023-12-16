import "./swiper.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

import { useState } from 'react';

export const  SwiperSlider = ({data, active}) => {
  const [swiper, setSwiper] = useState(null)
  return ( 
    <Swiper
      className='swiper'
      
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={!active ?  1 : 20}
      slidesPerView={active ? 3.5 : 4.5}
      navigation
      onSwiper={setSwiper}
      onSlideChange={() => console.log('slide change')}
    >
        <div className="swiper__btn_box">
        <FaChevronCircleLeft style={{fontSize: "1.5em"}} onClick={() => swiper.slidePrev()}/>
        <FaChevronCircleRight style={{fontSize: "1.5em"}} onClick={() => swiper.slideNext()}/>
        </div>
      {data?.map(item => {
        let videoId = item.id.videoId,
        urldeoId = item.snippet.thumbnails.default.url,
        titleldeoId = item.snippet.title,
        publisheoId = item.snippet.publishTime;
        return(
          <SwiperSlide key={videoId}  className={"slide__youtube".concat(active ? "slide_youtube__active": "")}>

        <div className='home_context'>
          <Link to={`/videopage/${videoId}`}><img className='default_url' src={urldeoId} alt="img"/></Link>
          <h5>{titleldeoId.slice(0, 20).concat("...")}</h5>
          <h6>{
              (function(){
                let date = new Date()
                let oldYear = new Date(publisheoId)
                let day = Math.floor((date - oldYear) / (1000 * 60 **2 * 24))
                if(day > 0 || day !== 0){
                  if(day > 30){
                    let month = Math.floor(day / 30)
                    if(month >= 12){
                      let year = Math.floor(month / 12)
                      return (
                        `${year} yil oldin yangilangan`
                      )
                    }else{
                      return (
                        `${month} oy oldin yangilangan`
                      )
                    }
                  }else{
                    return(
                      `${day} kun oldin yangilangan`
                    )
                  }
                }else{
                  return (
                    `yaqinda yangilangan`
                  )
                }
              }())
            }</h6>
        </div>
        </SwiperSlide>  
        )
      })}
    </Swiper>
  );
};
