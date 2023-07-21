import Card from "./components/card";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <h1 className="text-4xl text-center p-10 font-extrabold">Discover us in Three Easy Steps</h1>
      <div className="flex justify-center justify-evenly">
      
      <Card title="Go Shopping" image="https://cdn.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg" description=" Go Shopping" button="More"/>
      <Card title="About us" image="https://www.flaticon.com/free-icon/custom_2760975?term=customs&page=1&position=17&origin=search&related_id=2760975" description=" Customs Validation" button="Next"/>
      <Card title="Refund" image="https://www.flaticon.com/free-icon/refund_1642307?term=refund&page=1&position=30&origin=search&related_id=1642307" description=" Get Refund Back" button="Skip"/>
      </div>
      <h1 className="text-4xl text-center p-10 font-extrabold"></h1>
      <Footer/>
     </div>
  )
}