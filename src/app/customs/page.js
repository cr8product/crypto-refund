import Footer from "../components/footer";
import Navbar2 from "../components/navbar2";
import Textbox from "../components/textbox";


export default function Customs() {
    return (
        <div>
            <Navbar2 title="Customs" />
            <div className="grid h-10 rounded-box place-items-center"></div>
            <div className="flex justify-center justify-evenly">
                <Textbox name="Receipt Document ID" description="I.E: 1234567890" />
                <Textbox name="Value" description="I.E: $USDC" />
            </div>
            <div className="grid h-10 rounded-box place-items-center"></div>
            
            <div className="flex justify-center justify-evenly">
            <button className="btn btn btn-info btn-wide ">Approve</button>
            <button className="btn btn-warning btn-wide ">Reject</button>
        </div>
        <div className="grid h-20 rounded-box place-items-center"></div>
        <Footer/>
        </div>
            
            
            )
}