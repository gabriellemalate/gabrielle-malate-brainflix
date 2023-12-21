import Logo from "../../assets/images/BrainFlix-logo.svg";
import MagnifyingGlass from "../../assets/images/icons/search.svg"
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import Upload from "../../assets/images/icons/upload.svg";
import "./Header.scss"

function Header(props) {
    return (
        <header className='header'>
            <div className='header__eq'>
                <a href="../../../public/index.html">
                    <img className="header__logo" src={Logo} alt="BrainFlix Logo"/>
                </a>

                <div className='header__right'>
                    <div className='header__right-box-user'>
                        <form className="header__form" action="" method="">
                            <img className="header__form-magnifying-glass" src={MagnifyingGlass} alt="Search" />
                            <textarea className="header__form-box" type="search" placeholder="Search" />
                        </form>
                        <img className="header__user--mobile" src={UserImage} alt="User" />
                    </div>
                    <button className="header__button">
                        <div className="header__button-eq">
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