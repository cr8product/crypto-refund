
export default function Card(props){
    return(
    <div className="card w-96 glass">
        <figure><img src={props.image} alt="car!" /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">{props.button}</button>
            </div>
        </div>
    </div>
    )
    }