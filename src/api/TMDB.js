import axios from 'axios'
import Searchbar from '../components/Searchbar'

const TMDB=axios.create({
baseURL:"https://api.themoviedb.org/3/"
})

const getMoviesByTerm=(SearchTerm,setMovies,page_number,setTotalPages)=>{
TMDB.get('/search/movie',{
    params:{
        api_key:"6cf5fc17f93268b7dadde3464daa55b4",
        query:SearchTerm,
        page:page_number
        
    },
}).then((response)=>{
    //console.log(response)
    setMovies(response.data.results)
    setTotalPages(response.data.total_pages)
})
}

const getMovieDetails=(movieId,setCurrentMovie)=>{
    TMDB.get('movie/'+movieId,{
        params:{
            api_key:"6cf5fc17f93268b7dadde3464daa55b4",
        },
    }).then((response)=>{
        //console.log(response)
        setCurrentMovie(response.data)
    })
    }
export {getMoviesByTerm,getMovieDetails }