import '../styles/core/Reset.scss';
import '../styles/core/Vars.scss';
import '../styles/components/Footer.scss';
import { BsArrowUp } from 'react-icons/bs';

function Footer(params) {
  return (
    <>
      <footer className="footer">
        <p className="footer__coded">
          Coded and designed by <em>Vero Isla </em>{' '}
        </p>
        <p className="footer__links">
          You can find me on:
          <a
            href="https://github.com/veroisla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="footer__icon fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/veronica-isla-garcia-de-leaniz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in footer__icon"></i>
          </a>
        </p>
        {/* <a className="footer__up" href="/">
          <BsArrowUp className="footer__arrow" />
        </a> */}
      </footer>
    </>
  );
}

export default Footer;
