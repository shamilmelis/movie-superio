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
import {removeUser} from "../../Redux/Slices/userSlices";
import {useDispatch} from "react-redux";

const  Header = ({userEmail, userAuth}) => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const inputFocus = useRef(null)
    const dispatch = useDispatch();
    const [openTools, setOpenTools] = useState(false)
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
                                {userAuth ?  <Button variant="contained" sx={{
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontSize: '12px'
                                    }}>Оформить подписку</Button> : ''}
                                {userAuth ? <Button variant="text" sx={{
                                    backgroundColor: 'none',
                                    textTransform: 'none',
                                    color: 'gainsboro',
                                    fontFamily: 'Montserrat, sans-serif',
                                }}><FontAwesomeIcon className={'promocode_svg'} icon={faGift}/>Ввести промокод</Button> : ''}
                                {userAuth ? <div className={'user-tools_block'}>
                                    <Button onClick={() => setOpenTools(!openTools)} variant={"contained"} className={'user-name_span'} sx={{
                                        color: "#000 !important",
                                        textTransform: 'none',
                                        fontSize: '15px !important',
                                        backgroundColor: '#fff',
                                    }}>{userEmail}</Button>
                                    <div className={!openTools ? 'user-tools_inner' : 'user-tools_inner Active'}>
                                        <Button sx={{
                                            fontFamily: "Montserrat, sans-serif",
                                            textTransform: "none",
                                            color: '#000',
                                        }}>Избранное</Button>
                                        <Button onClick={() => dispatch(removeUser())} component={NavLink} sx={{
                                            fontFamily: "Montserrat, sans-serif",
                                            textTransform: "none",
                                            color: 'red',
                                        }}>Выйти</Button>
                                    </div>
                                </div> : <Button component={NavLink} to={'/login'} sx={{
                                    fontFamily: "Montserrat, sans-serif",
                                    textTransform: "none",
                                    color: "#fff"
                                }}><AccountCircleOutlinedIcon className={'login_svg'}></AccountCircleOutlinedIcon>Войти</Button>}
                            </div>
                        </div>
                    </div>
                </header>
                <div className={isSearch === true ? 'dark_background Active' : 'dark_background'}></div>
            </div>
    )
}

export default Header