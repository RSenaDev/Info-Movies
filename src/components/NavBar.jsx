import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import{BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

import './CompStyles/NavBar.css'

const NavBar = () =>{

    const [Search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!Search) return

        navigate(`/search?q=${Search}`)
        setSearch("")
    }

    return(
        <nav id="navBar">
                <h2>
                    <Link to='/'> <BiCameraMovie/>Movies Page</Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={Search}
                    />
                    <button type="submit"><BiSearchAlt2/></button>
                </form>
            </nav>
    )
}

export default NavBar;