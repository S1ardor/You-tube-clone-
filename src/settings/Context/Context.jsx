import { createContext, useEffect, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [videoPageData, setVideoPageData] = useState([])
  const [videoPageActive, setVideoPageActive] = useState(false)
  const [modal, setModal] = useState(false)
  const [signType, setSignType] = useState(false)
  const tokenLocals = window.localStorage.getItem("youtube-token") ? window.localStorage.getItem("youtube-token"): null
  const [token, setToken] = useState(tokenLocals)
  const userLocals = window.localStorage.getItem("youtube-user") ? JSON.parse(window.localStorage.getItem("youtube-user")): null
  const [user, setUser] = useState(userLocals)
  const darkModeLocals = window.localStorage.getItem("youtubeDarkMode")
  const [darkMode, setDarkMode] = useState(darkModeLocals ? darkModeLocals: null)
  useEffect(() => {
    if(token){
      window.localStorage.setItem("youtube-token", token)
    } 
  },[token])
  useEffect(() => {
    if(user){
      window.localStorage.setItem("youtube-user", JSON.stringify(user))
    }
  },[user])
  useEffect(() => {
    if(darkMode){
      window.localStorage.setItem("youtubeDarkMode", darkMode);
    }
  },[darkMode])
  return (
    <Context.Provider
      value={{ sidebar, setSidebar, sidebarActive, setSidebarActive, videoPageData, setVideoPageData, videoPageActive, setVideoPageActive, modal, setModal, signType, setSignType, token, setToken, user, setUser, darkMode, setDarkMode }}
    >
      {children}
    </Context.Provider>
  ); 
};
