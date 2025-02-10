import React from 'react'
import '../Home-Page/src/scss/main.scss'
import '../Home-Page/src/scss/media.scss'
import Header from "../../Components/Header";
import {useEffect, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import Button from "@mui/material/Button";
import LargeCard from "../../Components/Large-Card";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAnglesLeft,
    faAnglesRight,
    faFilm,
    faClapperboard,
    faHippo,
    faLeaf,
    faUtensils,
    faFaceSmile,
    faBook, faWandMagicSparkles, faMoon, faHeart, faRocket, faGhost, faMasksTheater, faGun
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMoviesCollection, setPopularMoviesCollection] = useState([])
    const myApi = `d3cb3344ce59944618d84dfd56a74482`

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${myApi}`)
            .then(res => {
                setPopularMoviesCollection(res.data.results)
            })
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${myApi}`)
            .then(res => {
                setTopRatedMovies(res.data.results)
            })
    }, [myApi])

    useEffect(() => {

    }, [popularMoviesCollection, topRatedMovies])
    setTimeout(() => {
        console.log(popularMoviesCollection)
        console.log(topRatedMovies)
    }, 2500)

    return (
        <div>
            <Header></Header>
            <main>
                <section className={'movie_carousel_section'}>
                    <div className="container">
                        <Swiper
                            pagination={false}
                            centeredSlides={true}
                            modules={[Navigation, Autoplay]}
                            className="inner_box swiper"
                            navigation={{
                                prevEl: ".custom_prev",
                                nextEl: ".custom_next"
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 2,
                                    loop: true,
                                },
                                600: {
                                    slidesPerView: 2,
                                    loop: true,
                                    centeredSlides: false,
                                },
                                100: {
                                    slidesPerView: 1,
                                    centeredSlides: false,
                                    loop: false,
                                }
                            }}
                        >
                            {
                                popularMoviesCollection.map(movie => {
                                    return (
                                        <SwiperSlide className="carousel_item">
                                            <div className={'premiere_block'}>
                                                <span className={'movie_premiere_span'}>Премьера</span>
                                            </div>
                                            <div className={'movie_backBg'}></div>
                                            <img className={'movie_backPoster'} src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt=""/>
                                            <h3 className={'movie_title'}>{movie.title ? movie.title : movie.title}</h3>
                                            <div className={'carousel_item_info'}>
                                                <span className={'movie_review_point'} style={{
                                                    backgroundColor: movie.vote_average > 7 ? '#48aaad' : 'green' && movie.vote_average < 6 ? 'orange' : 'green'
                                                }}>{movie.vote_average ? movie.vote_average.toString().slice(0, 3) : 'undefined'}</span>
                                                <span className={'movie_date'}>{movie.release_date ? movie.release_date.slice(0, 4) : 'undefined'}</span>
                                                <span className={'movie_category'}>Драмы</span>
                                                <span className={'movie_season'}>1 сезон</span>
                                                <span className={'movie_age_limit'}>18+</span>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>

                        <button className={'custom_prev'}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </button>
                        <button className={'custom_next'}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </div>
                </section>
                <section className={'movie_category-carousel_section'}>
                    <div className="container_category">
                        <div className="category_inner_box">
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: ".custom_prev_category",
                                    nextEl: ".custom_next_category"
                                }}
                                centeredSlides={false}
                                spaceBetween={3}
                                slidesPerView={'auto'}
                                slidesPerGroup={5}
                                freeMode={true}
                                mousewheel={true}
                                className="category_item">
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faGun} /> Экшн
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faFaceSmile} /> Комедия
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faMasksTheater} /> Драма
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faGhost} /> Ужасы
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faRocket} /> Фантастика
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faHeart} /> Мелодрама
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faMoon} /> Триллер
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faMoon} /> Приключение
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faMoon} /> Детекив
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faWandMagicSparkles} /> Фэнтези
                                        </Button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className={'category_item_button'}>
                                    <div className={'category_item_block'}>
                                        <NavLink to={'/'} className={'category_item_route'}></NavLink>
                                        <Button size='large' sx={{
                                            textTransform: 'capitalize',
                                            backgroundColor: '#333333',
                                            fontSize: '17px',
                                            fontFamily: 'Montserrat, sans-serif'
                                        }} variant="contained">
                                            <FontAwesomeIcon className={'icons_in_button'} icon={faBook} /> Документальный
                                        </Button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <button className={'custom_prev_category'}>
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </button>
                            <button className={'custom_next_category'}>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="movie_subs-carousel_section">
                        <div className="container_subs">
                            <div className={'subs_row'}>
                                <h3 className={'head_text'}>Смотрят сейчас</h3>
                                <Swiper
                                    modules={[Navigation]}
                                    navigation={{
                                        prevEl: ".custom_prev_cards",
                                        nextEl: ".custom_next_cards"
                                    }}
                                    slidesPerView={'auto'}
                                    spaceBetween={3}
                                    className="subs_inner">
                                    {
                                        topRatedMovies.map(movie => {
                                            return (
                                                <SwiperSlide className={'large_card_slide'}>
                                                    <LargeCard movieInfo={movie}></LargeCard>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <button className={'custom_prev_cards'}>
                                    <FontAwesomeIcon icon={faAnglesLeft} />
                                </button>
                                <button className={'custom_next_cards'}>
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default HomePage