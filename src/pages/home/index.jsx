import api from '../../services/api'
import {useState, useEffect} from 'react'
import './home.css'

//hooks
//useState = mudança de estado
//useEffect = ciclo de vida aplicação

export default function Home(){
    const [filme, setFilme] = useState([])

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "781c63760a57dc4bc8050224e5238c54",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log(response.data.results)
            setFilme(response.data.results)
            
        }
        loadFilme()
    },[])

    return(
        <section>
            <section className='container'>
                <section className='lista-filmes'>
                    {filme.map((filme)=>{
                        return(
                        <article>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                            <strong>{filme.title}</strong>
                            <p>{filme.overview}</p>
                        </article>
                    )})}

                </section>
            </section>
        </section>
    )
}