import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home">
                <Header></Header>
                <h4>Md Belatet <small>My website</small></h4>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;