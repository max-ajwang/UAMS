import Logo from './Logo';
import { FaBars } from 'react-icons/fa';
import { links } from './LandingNavbarData';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingNavbar';

const LandingNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <Wrapper>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div className="logoContainer">
              <Link to="/">
                {/* <Logo /> */}
                <h5>Universal Account Management System</h5>
              </Link>
            </div>

            <button
              className="nav-toggle"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            >
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default LandingNavbar;
