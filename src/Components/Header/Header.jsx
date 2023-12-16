import "./Header.css";
import { IoSearch } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { HiOutlineBell } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../settings/Context/Context";
import Logo from "../../assets//images/Black.svg";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate()
  const {videoPageActive, signType, setSignType, token, user, modal, setModal } = useContext(Context)
  const handleChange = (event) => {
    if(event.target.value.length && event.keyCode === 13){
        navigate(`/search/${event.target.value}`)
    }
  }
  useEffect(() => {
    if(token){
      console.log("ishladi")
    }
  },[user])
  return (
    <div className="search_box">
      <div>
      <div className="search_bar">
        {videoPageActive ? (
          <img onClick={() => navigate(-1)} src={Logo} alt="" />
        ) : null}
        <IoSearch className="search_icons" style={{fontSize: "1.3em"}}/>
        <input onKeyUp={handleChange} className={"search_input".concat(" border-transparent")} type="text" placeholder="search" />
      </div>
    </div>
    <div className="icons_right">
      <FiVideo className="icons icons_video"/>
      <CgMenuGridO className="icons icons_grid" />
      <HiOutlineBell className="icons"/>
      {token ? (
        <div>{user.name.split(" ").slice(0, 1).join(" ").substring(0, 1).toUpperCase().concat(".").concat(user.name.split(" ").slice(1, 2).join(" ").substring(0, 1).toUpperCase())}</div> 
        ): (
        <IoPersonCircleOutline onClick={() => setModal(true) } style={{fontSize: "1.8em", color: "#898989"}}/>
        )} 
    </div>
    </div>
  )
}

export default Header
