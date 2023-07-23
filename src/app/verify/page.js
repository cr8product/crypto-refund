import Card from "../components/card";
import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";



export default function Verfiy() {
    return (
        <div>

            <Navbar2 title="Verify Yourself" />

            <div className="flex justify-center justify-evenly py-10">

                <Card title="No Need to Share or Scan Your Passport" image="https://img.freepik.com/free-vector/illustration-face-recognition-technology_53876-6973.jpg?w=900&t=st=1689982234~exp=1689982834~hmac=eae72d29e1ae902dbe8dcde4770c4eb3b93fa8fe957c3b4fa5c072ea12b743d5" button="More" />
                <Card title="Verify with Polygon ID" image="https://pbs.twimg.com/profile_images/1639270979288399876/3OT3Lsux_400x400.jpg" button="Verify" />
                
            
            </div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            
            <Footer/>



        </div>
    )
}