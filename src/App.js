import './App.css';
import Slide from "./component/slider/slide";
import ContactUs from "./component/contact/contact";
import AboutUs from "./component/about/about";
import Product from "./component/product/product"
import Getideas from "./component/getideas/getideas"
import Navbar from './component/navbar/navbar';
import Footer from "./component/Footer/footer";
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Slide />
      <Product />
      <Getideas/>
      <AboutUs/>
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
