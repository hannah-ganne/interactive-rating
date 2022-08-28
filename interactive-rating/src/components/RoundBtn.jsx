export default function RoundBtn(props) {
    return (
        <button
            className="round-btn"
            value={props.value}
            onClick={props.onClick}
        >{props.children}</button>
    )
}
