import React from "react";
import Logo from "../../assets/images/BrainFlix-logo.svg";
import MagnifyingGlass from "../../assets/images/icons/search.svg"
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/images/icons/upload.svg";
import "./Header.scss"
import { Link, useNavigate } from "react-router-dom";

function Header(props) {
    let navigate = useNavigate();
    function homeClick() {
        navigate('/');
    }
    function upClick() {
        navigate('/upload');
    }
    return (
        <header className='header'>
            <div className='header__eq'>

                <Link to="/">
                    <img className="header__logo" src={Logo} alt="BrainFlix Logo" onClick={homeClick}/>
                </Link>


                <div className='header__right'>
                    <div className='header__right-box-user'>
                        <form className="header__form" action="" method="">
                            <img className="header__form-magnifying-glass" src={MagnifyingGlass} alt="Search" />
                            <textarea className="header__form-box" type="search" placeholder="Search" />
                        </form>
                        <img className="header__user--mobile" src={UserImage} alt="User" />
                    </div>
                    <button className="header__button">
                        <div className="header__button-eq" onClick={upClick}>
                            <img className="header__button-icon" alt="Upload Icon" src={Upload} />
                            UPLOAD
                        </div>
                    </button>
                    <img className="header__user--tablet" src={UserImage} alt="User" />
                </div>
            </div>
        </header>
    );
}

export default Header;