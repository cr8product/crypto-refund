import Bubble from "../components/bubble";
import Footer from "../components/footer";

import Navbar2 from "../components/navbar2";


export default function Detail() {
    return (
        <div>
            <Navbar2 title="Learn More"/>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <div className="flex justify-center justify-evenly">

            <Bubble title="Go Shopping" description="Shopping is more secure, pleasant, easy and fast. Only need is you. Let's join the adventure with us."/>
            <Bubble title="Customs Validation" description="Go Shopping, and validate your shopping to customs. Customs validation is necessary to complete process. "/>
            <Bubble title="Get Your Refund Back" description= "Refunds are immdetiately send back after the customs approval. No need to wait 2-3 weeks. "/>
            </div>
            <div className="grid h-20 rounded-box place-items-center"></div>
            <Footer />


        </div>
    )
}