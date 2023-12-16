import "./sidebar.css";
import BurgerMenu from "../../assets/images/Menu.png";
import Logo from "../../assets/images/Black.svg";
import { NavLink ,Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../settings/Context/Context";
// * * * images
import { BiHome } from "react-icons/bi";
import { PiFireSimpleBold } from "react-icons/pi";
import { BsFilesAlt } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { RiFilePaper2Line } from "react-icons/ri";
import { GoStopwatch } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuMusic4 } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
export default function Sidebar() {
  const { setSidebar, videoPageActive} = useContext(Context);
  

  return (
    <div className={"site__sidebar sidebar".concat(videoPageActive ? " sidebar__hide": "")}>
      <div className="container__fluid">
        <div className="sidebar__inner">
          <div className="sidebar__top">
            <div className="sidebar__burger" onClick={() => setSidebar(true)}>
              <img className="burger_menu" src={BurgerMenu} alt="You-tube-image" />
            </div>
            <div className="sidebar__logo">
              <Link to='/'>
              <img
                src={Logo}
                onClick={() => window.location.reload()}
                alt="You-tube-image"
                className="sidebar__logo"
              /></Link>
            </div>
          </div>
          <div className="sidebar_list__box">
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/"}
                >
                  <BiHome style={{fontSize: "1.4em"}}/>        
                  <h3>Home</h3>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/trending"}
                >
              <PiFireSimpleBold style={{fontSize: "1.4em"}}/>
                  <h3>Trending</h3>
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/subscriptions"}
                >
                  <BsFilesAlt style={{fontSize: "1.2em"}}/>
                  <h3>Subscriptions</h3>
                </NavLink>
              </li>
            </ul>


            <ul className="texts_pag">
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/library"}
                  >
                    <GoFileDirectory style={{fontSize: "1.4em"}}/>
                    Library
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/history"}
                  >
                    <RiFilePaper2Line style={{fontSize: "1.4em"}}/>
                    History
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/watchlater"}
                  >
                    <GoStopwatch style={{fontSize: "1.4em"}}/>
                    Watch later
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/favourites"}
                  >
                    <FaRegStar style={{fontSize: "1.4em"}}/>
                    Favourites
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/likedvideos"}
                  >
                    <FaRegHeart style={{fontSize: "1.3em"}}/>
                    Liked videos
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/music"}
                  >
                    <LuMusic4 style={{fontSize: "1.4em"}}/>
                    Music
                </NavLink>
              </li>
              <li className="sidebar__item">
                <NavLink className={({ isActive }) =>
                    isActive ? "link active__link" : "link"
                  }
                  to={"/games"}
                  onClick={() => window.scrollTo(0, 0)}
                  >
                    <IoGameControllerOutline style={{fontSize: "1.4em"}}/>
                    <h3>Game</h3>
                </NavLink>
              </li>
              <li className="sidebar__item link">
                  <details> 
                    <summary>Show more</summary>
                    <ul>
                      <li className="sidebar__item">
                        <NavLink
                        className={({isActive}) => 
                        isActive ? "link active__link" : "link"
                        } to={"/"} onClick={() => window.scrollTo(0, 0)}>
                          Home
                        </NavLink>
                      </li>
                      <li className="sidebar__item">
                        <NavLink
                        className={({isActive}) =>
                        isActive ? "link active__link" : "link" 
                      } 
                      to={"/shorts"} onClick={() => window.scrollTo(0, 0)}
                        >
                        Shorts
                        </NavLink>
                      </li>
                      <li className="sidebar__item">
                        <NavLink
                        className={({isActive}) =>
                        isActive ? "link active__link" : "link" 
                      } 
                      to={"/Subscription"} onClick={() => window.scrollTo(0, 0)}
                        >
                          Subscriptions
                        </NavLink>
                      </li>

                    </ul>
                  </details>
              </li>   
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
