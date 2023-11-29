import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import logo from '../Image/Logo.png'

const Header = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/"><img className={s.logo} src={logo} /> </NavLink>
            <div className={s.margin}>
                <NavLink to="/news" className={s.neon}> News</NavLink>

            </div>
        </nav>

    )
}
export default Header