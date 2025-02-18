import React from 'react'
import {useState, useEffect} from 'react'
import '../Large-Card/src/scss/main.scss'
import '../Large-Card/src/scss/media.scss'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(solidBookmark, regularBookmark);
const LargeCard = ({movieInfo}) => {
    const [movieId, setMovieId] = useState([])
    const [appear, setAppear] = useState(false)
    const myApi = `d3cb3344ce59944618d84dfd56a74482`
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieInfo.id}?api_key=${myApi}`)
            .then(res => {
                setMovieId(res.data)
            })
    }, [movieInfo.id, myApi])
    useEffect(() => {

    }, [movieInfo, movieId])

    return (
        <div className={'card_box'}>
            <NavLink to={'/'}></NavLink>
            <div className={'card_top_actions'}>
                <div className={'save-to-favourite_box'}>
                    <button className={'save-to-favourite_btn'} onMouseEnter={() => setAppear(true)} onMouseLeave={() => setAppear(false)}>
                        <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                    </button>
                    <span className={!appear ? 'save-to-favourite_text' : 'save-to-favourite_text Appear'}>Буду смотреть</span>
                </div>
            </div>
            <div className={'card_top_backblur'}>

            </div>
            <div className={'card_bottom_info'}>
                <div className="card_info">
                    <span className={'card_movie_point_review'} style={{
                        backgroundColor: movieInfo.vote_average > 7 ? '#48aaad' : 'green' && movieInfo.vote_average < 6 ? 'orange' : 'green'
                    }}>{movieInfo.vote_average ? movieInfo.vote_average.toString().slice(0,3).length < 2 ? movieInfo.vote_average.toString() + '.0' : movieInfo.vote_average.toString().slice(0,3)  : 'undefined'}</span>
                    <span className={'card_movie_title'}>{movieInfo.title ? movieInfo.title : 'undefined'}</span>
                </div>
                <Button sx={{
                    textTransform: 'capitalize'
                }} variant="contained">Смотреть</Button>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`} alt="" className={'card_image'}/>
            <h4 className={'card_movie_title-mobile'}>{movieInfo.title ? movieInfo.title.length > 14 ? movieInfo.title.slice(0, 14) + '...' : movieInfo.title : 'undefined'}</h4>
        </div>
    )
}

export default LargeCard