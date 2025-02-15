import React from 'react'
import '../Footer/src/scss/main.scss'
import '../Footer/src/scss/media.scss'
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer>
            <div className="footer_section">
                <div className="footer_container">
                    <div className="footer_box">
                        <div className="information_col">
                            <div className="information_block">
                                <h4 className={'footer_nav_title'}>О нас</h4>
                                <NavLink className={'footer_nav_link'} to={'/'}>О компании</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Вакансии</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Программа бета-тестирования</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Информация для партнеров</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Размещение рекламы</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Пользовательское соглашение</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Политика конфидециальности</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Оставить отзыв</NavLink>
                            </div>
                        </div>
                        <div className="information_col">
                            <div className="information_block">
                                <h4 className={'footer_nav_title'}>Разделы</h4>
                                <NavLink className={'footer_nav_link'} to={'/'}>Мой superio</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Что нового</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Фильмы</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Сериалы</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Мультфильмы</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Что посмотреть</NavLink>
                                <NavLink className={'footer_nav_link'} to={'/'}>Активация сертификата</NavLink>
                            </div>
                        </div>
                        <div className="information_col">
                            <div className="information_block">
                                <h4 className={'footer_nav_title'}>Служба поддержки</h4>
                                <span className={'footer_help_text'}>Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</span>
                                <Button variant={'contained'} sx={{
                                    textTransform: 'none'
                                }}>Написать в чате</Button>
                                <Button variant={'contained'} sx={{
                                    width: 40,
                                    height: 40
                                }}><FontAwesomeIcon icon={faEnvelope} fontSize={24} /></Button>
                            </div>
                        </div>
                    </div>
                    <div className={'footer_rights'}>
                        <span className={'rights_date_text'}>© 2025 ООО «SUPERIO»</span>
                        <span className={'rights_author_text'}>Shamil Melisov ® and related service marks are the property of Shamil Melisov, Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer