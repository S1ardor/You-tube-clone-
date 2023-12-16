import { useContext, useEffect } from "react"
import "./bar.css"
import { Context } from "../../settings/Context/Context"
// * * * imgs
import YoutubeMenu from "../../assets/images/Menu.png";
import Logo from "../../assets/images/Black.svg";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { FaSquareYoutube } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { TbClockHour5 } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";


export const Bar = () => {
    const {sidebar, setSidebar, sidebarActive, setSidebarActive} = useContext(Context)
    useEffect(() => {
        if(sidebar){
            setTimeout(() => {
                setSidebarActive(true)
            }, 100)
        }
        
    },[sidebar, setSidebarActive]);

    const hendelClick = (e) => {
        if(!e.target.matches(".bar_chail")){
            setSidebarActive(false)
                     setTimeout(() => {
                        setSidebar(false)
                     },200);
        }
    }
    return(
        <div onClick={hendelClick} className="bar__overlay overlay" style={{display: sidebar ? "flex": "none"}}>
            <div className="bar bar_chail" style={{transform: `translateX(${sidebarActive ? "0%": "-100%"})`}}>
               <div className="bar_content">
               <button className="bar_chail bar_btn" onClick={() => {
                     setSidebarActive(false)
                     setTimeout(() => {
                        setSidebar(false)
                     },200) 
                }}>
                <img className="bar_mrnu-img" src={YoutubeMenu} alt="menu" />
                </button>
                <img src={Logo} alt="youtube" />
               </div>
               
               <ul className="bar_text">
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/"}> <GoHomeFill style={{fontSize: "1.4em"}}/> Home</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/shorts"}> <SiYoutubeshorts style={{fontSize: "1.4em"}}/> Shorts</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/subscription"}> <FaSquareYoutube style={{fontSize: "1.4em"}}/> Subscriptions</NavLink>
                    </li>
                    <hr />
                    <h2 className="your_bar">You<IoIosArrowForward/></h2>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/mykanal"}> <IoIosContact style={{fontSize: "1.5em"}}/>Your Channel</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/history"}> <TbClockHour5 style={{fontSize: "1.5em"}}/> History</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/yourvideo"}> <GoVideo style={{fontSize: "1.4em"}}/> Your video</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/videos"}> <BiLike style={{fontSize: "1.4em"}}/> Liked video</NavLink>
                    </li>
                    <hr />
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/settinges"}> <IoSettingsOutline style={{fontSize: "1.4em"}}/>Settinges</NavLink>
                    </li>
                    <li className="bar_iteam">
                        <NavLink className={"bar_link"} to={"/feedback"}> <MdOutlineFeedback style={{fontSize: "1.4em"}}/>Send feedback</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}