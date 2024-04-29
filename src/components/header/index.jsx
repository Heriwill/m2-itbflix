import {Link} from 'react-router-dom'
import './header.css'

export default function Header(){
    return(
        <header>
            <Link className='logo' to='/'>ItbFlix</Link>
            <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>

        </header>
    )
}