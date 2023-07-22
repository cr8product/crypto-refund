

export default function Textbox(props) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{props.name}</span>
            </label>
            <input type="text" placeholder={props.description} className="input input-bordered w-full max-w-xs" />
            <label className="label">
                
            </label>
        </div>
    )
}