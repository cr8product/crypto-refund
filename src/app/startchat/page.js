
import Card2 from "../components/card2";
import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";


export default function StartChat(){
    return(
        <div>
            <Navbar2 title="Contact us"/>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="flex justify-center justify-evenly">

            <Card2 title="Need any help?" image="https://img.freepik.com/free-vector/employees-giving-hands-helping-colleagues-walk-upstairs_74855-5236.jpg?w=1480&t=st=1690075834~exp=1690076434~hmac=7c63a4bb1ecd1d6aa7db39ee64f59e138d1ac28334110215a802caa9e0d9a9f3" description=" We are here to support you." button="Start chat"/>
            
            </div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <Footer/>


        </div>
    )
}