import React from 'react'
import '../Header/src/sass/media.scss'
import '../Header/src/sass/main.scss'
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faGift, faXmark} from '@fortawesome/free-solid-svg-icons'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Divide as Hamburger } from 'hamburger-react'
const  Header = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const inputFocus = useRef(null)
    const navSearch = () => {
        setIsSearch(true)
        let body = document.querySelector('body')
        body.className = 'body Disabled'
    }
    const closeNavSearch = () => {
        setIsSearch(false)
        let body = document.querySelector('body')
        body.className = 'body'
    }
    const toggleMenu = () => {
        let body = document.querySelector('body')
        body.classList.toggle('Disabled')
    }
    const navLink = (e) => {
        let bar = document.querySelectorAll('.bar_list_item')
        bar.forEach(el => {
            el.className = 'bar_list_item'
        })
        e.target.nextElementSibling.className = 'bar_list_item Active'
    }

    useEffect(() => {
        if (isSearch) {
            inputFocus.current.focus()
        } else {
            inputFocus.current.blur()
        }
    }, [isSearch])
    return (
            <div className={'wrapper'}>
                <header className={isSearch === true ? 'header_media Fixed' : 'header_media'}>
                    <div className="container">
                        <div className={burgerMenu === false ? 'con_inner' : 'con_inner Active'}>
                            <div className={'website_logo_block'}>
                                <h1 className={'title_text'}>SUPERIO</h1>
                                <div className={'burger_block'}>
                                    <Hamburger onToggle={() => toggleMenu()} toggled={burgerMenu} toggle={setBurgerMenu} color="#fff" size={25}/>
                                </div>
                            </div>
                            <div className={isSearch === true ? 'navigation_block Disabled' : 'navigation_block'}>
                                <div className={'navigation_list_item'}>
                                    <NavLink to={'/'} className={'navigation_links'} onClick={(e) => navLink(e)}>Главная</NavLink>
                                    <span className={'bar_list_item Active'}></span>
                                </div>
                                <div className={'navigation_list_item'}>
                                    <NavLink to={'/catalog'} className={'navigation_links'} onClick={(e) => navLink(e)}>Каталог</NavLink>
                                    <span className={'bar_list_item'}></span>
                                </div>
                                <div className={'navigation_list_item'}>
                                    <NavLink to={'/store'} className={'navigation_links'} onClick={(e) => navLink(e)}>Магазин</NavLink>
                                    <span className={'bar_list_item'}></span>
                                </div>
                                <div className={'navigation_list_item'}>
                                    <NavLink to={'/kids'} className={'navigation_links'} onClick={(e) => navLink(e)}>Детям</NavLink>
                                    <span className={'bar_list_item'}></span>
                                </div>
                            </div>
                            <div className={isSearch === true ? 'search_block Active' : 'search_block'}>
                                <input className={isSearch === true ? 'navigation_search_input Active' : 'navigation_search_input'} ref={inputFocus} placeholder={'Название фильма, сериала'} type="text"/>
                                <button onClick={() => navSearch()} className={isSearch === true ? 'navigation_search_button Disabled' : 'navigation_search_button'}><FontAwesomeIcon className={'search_icon'} icon={faMagnifyingGlass}/></button>
                                <button className={'navigation_search_button_mobile'}><FontAwesomeIcon className={'search_mobile_icon'} icon={faMagnifyingGlass}/></button>
                                <button onClick={() => closeNavSearch()} className={isSearch === true ? 'navigation_search_close_input Active' : 'navigation_search_close_input'}><FontAwesomeIcon className={'close_svg'} icon={faXmark} /></button>
                            </div>
                            <div className={'auth_block'}>
                                <Button variant="contained" sx={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    fontSize: '12px'
                                }}>Оформить подписку</Button>
                                <Button variant="text" sx={{
                                    backgroundColor: 'none',
                                    textTransform: 'none',
                                    color: 'gainsboro',
                                    fontFamily: 'Montserrat, sans-serif',
                                }}><FontAwesomeIcon className={'promocode_svg'} icon={faGift}/>Ввести промокод</Button>
                                <Button sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    textTransform: "none",
                                    color: 'gainsboro'
                                }}><AccountCircleOutlinedIcon className={'login_svg'}></AccountCircleOutlinedIcon>Войти</Button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={isSearch === true ? 'dark_background Active' : 'dark_background'}></div>
            </div>
    )
}

export default Header