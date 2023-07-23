import { Chathura } from "next/font/google";
import Footer from "../components/footer";
import Chat from "../components/chat";
import Navbar2 from "../components/navbar2";




export default function Support() {
    return (
<div>
<Navbar2 title="Contact Us"/>
<Chat/>
<div className="grid h-20 rounded-box place-items-center"></div>
<div className="grid h-20 rounded-box place-items-center"></div>
<div className="grid h-20 rounded-box place-items-center"></div>
<div className="grid h-20 rounded-box place-items-center"></div>
<Footer/>

</div>


    )
}