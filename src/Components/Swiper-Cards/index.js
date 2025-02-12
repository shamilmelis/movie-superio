import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, FreeMode} from "swiper/modules";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import LargeCard from "../Large-Card";
import './src/scss/main.scss'
import './src/scss/media.scss'
const SwiperCards = ({swiperThemathic, themathicId, swiper_id}) => {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const myApi = `d3cb3344ce59944618d84dfd56a74482`


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${myApi}&with_genres=${themathicId}`)
            .then(res => {
                setTopRatedMovies(res.data.results)
            })
    }, [myApi])

    useEffect(() => {

    }, [topRatedMovies, themathicId])
    return (
        <>
            <section className={`swiper_section`} key={swiper_id}>
                <div className="swiper_container">
                    <div className="swiper_box">
                        <h3 className={'swiper_thematic'}>{swiperThemathic}</h3>
                        <Swiper
                            modules={[Navigation, FreeMode]}
                            navigation={{
                                prevEl: `.custom_prev_btn_${swiper_id}`,
                                nextEl: `.custom_next_btn_${swiper_id}`
                            }}
                            slidesPerView={'auto'}
                            spaceBetween={10}
                            freeMode={true}
                            freeModeMomentum={true}  // Плавность движения
                            freeModeMomentumRatio={0.5} // Регулировка скорости торможения
                            freeModeMomentumVelocityRatio={0.8} // Контроль скорости движения
                            freeModeSticky={false}
                            className={`swiper_slider`}
                        >
                            {
                                topRatedMovies.map(movie => {
                                    return (
                                        <SwiperSlide className={'swiper_element'}>
                                            <LargeCard movieInfo={movie}></LargeCard>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <button className={`custom_prev_btn_${swiper_id}`}>
                            <FontAwesomeIcon icon={faAnglesLeft} />
                        </button>
                        <button className={`custom_next_btn_${swiper_id}`}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SwiperCards