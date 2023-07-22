import Navbar2 from "../components/navbar2";
import Textbox from "../components/textbox";


export default function Customs() {
    return (
        <div>
            <Navbar2 title="Customs" />

            <div className="flex justify-center justify-evenly">
                <Textbox name="Receipt Document ID" description="I.E: 1234567890" />
                <Textbox name="Value" description="I.E: $USDC" />
                </div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Scan Tax Free form</div>
                <button className="btn btn-warning btn-wide ">Approve</button>
                
            </div>
            
            
            )
}