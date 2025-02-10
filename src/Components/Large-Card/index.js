import React from 'react'
import {useState, useEffect} from 'react'
import '../Large-Card/src/scss/main.scss'
import '../Large-Card/src/scss/media.scss'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
const LargeCard = ({movieInfo}) => {
    const [movieId, setMovieId] = useState([])
    const [movieImageCollection, setMovieImageCollection] = useState([])
    const myApi = `d3cb3344ce59944618d84dfd56a74482`
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieInfo.id}?api_key=${myApi}`)
            .then(res => {
                setMovieId(res.data)
                console.log(movieId)
            })
        axios.get(`https://api.themoviedb.org/3/movie/${movieInfo.id}/images?api_key=${myApi}`)
            .then(res => {
                setMovieImageCollection(res.data.posters[4].file_path)
            })
    }, [myApi])
    useEffect(() => {
        console.log(movieId)
        console.log(movieImageCollection)
    }, [movieId, movieInfo, movieImageCollection])

    return (
        <div className={'card_box'}>
            <span className={'premiere_span'}>Премьера</span>
            <NavLink to={'/'}></NavLink>
            <div className={'card_top_backblur'}>

            </div>
            <div className={'card_bottom_info'}>
                <div className="card_info">
                    <span className={'card_movie_point_review'} style={{
                        backgroundColor: movieInfo.vote_average > 7 ? '#48aaad' : 'green' && movieInfo.vote_average < 6 ? 'orange' : 'green'
                    }}>{movieInfo.vote_average ? movieInfo.vote_average.toString().slice(0,3) : 'undefined'}</span>
                    <span className={'card_movie_date'}>{movieInfo.release_date ? movieInfo.release_date.toString().slice(0, 4) : 'undefined'}</span>
                    <span className={'card_movie_genre'}>{movieId.genres ? movieId.genres[0].name : 'undefined'}</span>
                    <span className={'card_movie_time'}>{movieId.runtime ? Math.floor(movieId.runtime / 60) + 'ч' + ' ' + movieId.runtime % 60 + 'мин' : 'undefined'}</span>
                </div>
                <Button variant="contained">Подробнее</Button>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`} alt="" className={'card_image'}/>
        </div>
    )
}

export default LargeCard