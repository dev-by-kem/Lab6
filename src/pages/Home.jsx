import { Link } from "react-router-dom"
export default function Home(){
    return(
        <div>
            <h1 className = "font-serif font-semibold">Welcome to the Home Page</h1>
            <Link to="/student" className = "font-medium text-yellow-400">Go to Student Page</Link>
        </div>
    )
}