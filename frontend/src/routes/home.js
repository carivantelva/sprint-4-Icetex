import Eshop from "../components/eSchop";
import NavBar from "../components/nav";
import Footer from "../components/footer";
import './home.css'
//import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    
      <NavBar canSearch={true} ></NavBar>
      <Eshop></Eshop>
      <Footer></Footer>
    </>
  );
}
export default Home;
