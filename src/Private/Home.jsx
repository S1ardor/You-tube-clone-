import "./home.css";
import Dashboard from "../Components/Dashboard/Dashboard"
import Sidebar from "../Components/Sidebar/Sidebar"
import { Bar } from "../Components";
import { useContext } from "react";
import { Context } from "../settings/Context/Context";

export const Home = () => {
    const {videoPageActive} = useContext(Context)
    return(
        <main className="site__main">
            <div className="container">
            <div className="site__inner" style={{gridTemplateColumns: videoPageActive ? "100%": "15% 85%"}}>
                <Bar/>
                <Sidebar/>
                <Dashboard/>
            </div>
            </div>
        </main>
    )
}