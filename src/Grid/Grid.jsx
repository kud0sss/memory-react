import "./Grid.css"
import Card from "../Card/Card.jsx"
export default function Grid(){
    return(
        <div className="container">
            <Card src="/img/React.jpg" alt="card 1"/>
            <Card src="/img/Java.jpg" alt="card 2"/>
            <Card src="/img/Python.jpg" alt="card 3"/>
        </div>
    )
}