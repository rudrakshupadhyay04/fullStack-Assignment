import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from 'react-router-dom';

export default function MainPage() {
  return (
    <div className=" mx-2">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
