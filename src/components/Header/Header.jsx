import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <header className="header">
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <ul className="nav-list">
                            <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                                }
                            >
                                о нас
                            </NavLink>
                            </li>

                            <li className="nav-list__item">
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                                }
                            >
                                галерея котиков
                            </NavLink>
                            </li>

                            <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                                }
                            >
                                контакты
                            </NavLink>
                            </li>
                        </ul>

                        <h2 className="logo">Happy Cats</h2>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;