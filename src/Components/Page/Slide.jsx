import { Link } from "react-router-dom"
import { SwiperSlide } from "swiper/react"

export const Slide = ({videoId, urldeoId, titleldeoId,  publisheoId, active}) => {
    return(
        <SwiperSlide  className={"slide__youtube".concat(active ? "slide_youtube__active": "")}>
        <div className='home_context'>
          <Link to={`/videopage/${videoId}`}><img className='default_url' src={urldeoId} alt="img"/></Link>
          <h5>{titleldeoId}</h5>
          <h6>{publisheoId}</h6>
        </div>
        </SwiperSlide>   
    )
}