import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <div className="home">
                <Header></Header>
                <h4>Md Belatet <small>My website</small></h4>
            </div>
            {
                navigation.state ===  'loading'?
                 <p>Loading....</p> :
                  <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;