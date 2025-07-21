import Link from "./Link";
import "./Navbar.css";

function Navbar(){

    let mioNome = "Dario";

    return(
        <>
        <ul>
            <li>
                <Link></Link>
            </li>
            <li>
                <Link></Link>
            </li>
            <li>
                <Link></Link>
            </li>

            <li>
                {mioNome}
            </li>
            
            <li className="textClasse">
                testo con classe
            </li>
        </ul>
        </>
    )
}

export default Navbar;