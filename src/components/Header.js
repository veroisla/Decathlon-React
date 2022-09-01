import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Header.scss';

import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbBuildingWarehouse } from 'react-icons/tb';
import { BsPerson } from 'react-icons/bs';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

function Header(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
  };
  return (
    <header className="header">
      <div className="header__whiteText">
        <p className="header__blueBg">
          <strong>Cambios y devoluciones</strong> 60 días
        </p>
        <p className="header__blueBg header__blueBgComputer">
          <strong className="header__strongComputer">Clica y recoge</strong> en
          1 hora gratis
        </p>
        <p className="header__blueBg header__blueBgComputer">
          <strong className="header__strongComputer">Puntos de recogida</strong>{' '}
          más de 6000 puntos
        </p>
        <p className="header__blueBg header__blueBgComputer">
          <strong className="header__strongComputer">
            Financiación inmediata
          </strong>{' '}
          con tu tarjeta bancaria
        </p>
      </div>

      <nav className="header__menu">
        {/* <!-- Icon Menu --> */}
        <div className="header__iconAndText header__menuIcon">
          <div className="header__icon--nav">
            <AiOutlineMenu />
          </div>
          <p>menú</p>
        </div>

        {/* <!-- Icon Decathlon --> */}
        <Link to={'/'}>
          {' '}
          <div className="header__menu--logo">
            <img
              className="header__menu--logoImg"
              src={logo}
              alt="logo decathlon"
              title="Decthlon, página principal"
            />
          </div>
        </Link>

        {/* <!-- Search computer version --> */}
        <form className="search__computer">
          <input
            className="search__input"
            type="text"
            placeholder="Busca producto, deporte..."
            disabled
          ></input>
          <div className="search__totalIcon">
            <div className="search__icon">
              <AiOutlineSearch />
            </div>
          </div>
        </form>

        {/* <!-- Icon Store --> */}
        <div className="header__iconAndText">
          <div className="header__icon--nav">
            <TbBuildingWarehouse />
          </div>
          <p>tienda</p>
        </div>

        {/* <!-- Icon Perfil --> */}
        <div className="header__iconAndText">
          <div className="header__icon--nav">
            <BsPerson />
          </div>
          <p>mi perfil</p>
        </div>

        {/* <!-- Icon Ayuda --> */}
        <div className="header__iconAndText header__help">
          <div className="header__icon--nav">
            <IoIosHelpCircleOutline />
          </div>
          <p>ayuda</p>
        </div>

        {/* <!-- Icon Shop --> */}
        <div className="header__shopYellow">
          <div className="header__icon--nav">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>

      {/* <!-- SEARCH --> */}
      <form className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Busca producto, deporte..."
          onChange={handleChange}
          value={props.inputSearch}
        ></input>
        <div className="search__totalIcon">
          <div className="search__icon">
            <AiOutlineSearch />
          </div>
        </div>
      </form>
    </header>
  );
}

export default Header;
