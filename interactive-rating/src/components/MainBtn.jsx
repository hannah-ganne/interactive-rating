export default function MainBtn(props) {
    return (
        <button className="main-btn" onClick={props.onClick}>{props.children}</button>
)
}