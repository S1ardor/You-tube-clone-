import "./dashboard.css";
import { Route, Routes } from "react-router-dom";
import Treding from "../Page/Treding";
import Subscriptions from "../Page/Subscriptions";
import Library from "../Page/Library";
import History from "../Page/History";
import Watch from "../Page/Watch";
import Favourites from "../Page/Favourites";
import Header from "../Header/Header";
import Liked from "../Page/Liked";
import Music from "../Page/Music";
import Games from "../Page/Games";
import Shorts from "../Page/Shorts";
import Mykonal from "../Page/Mykonal";
import Yourvideo from "../Page/Yourvideo";
import Videos from "../Page/Videos";
import Settings from "../Page/Settings";
import Feedback from "../Page/Feedback";
import Home from "../Page/Home";
import VideoPage from "../Page/VideoPage";
import { SearchPage } from "../Page/SearchPage";


export default function Dashboard() {
  return (
    <div className="site__dashboard">
      <div className="container__fluid">
      <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/trending" element={<Treding/>}/>
          <Route path="/subscriptions" element={<Subscriptions/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/watchlater" element={<Watch/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/likedvideos" element={<Liked/>}/>
          <Route path="music" element={<Music/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path="/shorts" element={<Shorts/>}/>
          <Route path="/mykanal" element={<Mykonal/>}/>
          <Route path="/yourvideo" element={<Yourvideo/>}/>
          <Route path="/videos" element={<Videos/>}/>
          <Route path="/settinges" element={<Settings/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/videopage/:id" element={<VideoPage/>}/>
          <Route path="/search/:searchvalue" element={<SearchPage/>}/>
        </Routes>
      </div>
    </div>
  )
}
